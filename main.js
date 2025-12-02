// Improved mobile hamburger behavior with touchstart + keyboard + outside tap close
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (!burger || !mobileNav) return;

  // Ensure hamburger is keyboard-focusable & accessible
  burger.setAttribute('role', burger.getAttribute('role') || 'button');
  if (!burger.hasAttribute('tabindex')) burger.setAttribute('tabindex', '0');
  if (!burger.hasAttribute('aria-expanded')) burger.setAttribute('aria-expanded', 'false');

  const toggleNav = (evt) => {
    if (evt && typeof evt.preventDefault === 'function') evt.preventDefault();
    const isOpen = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(!!isOpen));
  };

  // Click (desktop / some mobile)
  burger.addEventListener('click', toggleNav);

  // Touch (iOS) — preventDefault so click doesn't get blocked; passive:false needed to allow preventDefault
  burger.addEventListener('touchstart', function(e){
    // prevent the touch from also generating a delayed click in some browsers
    e.preventDefault();
    toggleNav(e);
  }, { passive: false });

  // Keyboard (Enter / Space)
  burger.addEventListener('keydown', function(e){
    if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      toggleNav(e);
    }
  });

  // Close on link click inside mobile nav
  document.querySelectorAll('#mobileNav a').forEach(a=>{
    a.addEventListener('click', ()=> {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav when tapping outside of it (useful on touch devices)
  document.addEventListener('touchstart', function(e){
    if (!mobileNav.classList.contains('open')) return;
    // if the tap is outside both the mobileNav and burger, close it
    if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  }, { passive: true });

  // Also close if resizing to large screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});

// Dark mode toggle (kept as before)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("div");
  toggle.textContent = "🌓";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.fontSize = "26px";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = "9999";
  toggle.setAttribute('role','button');
  toggle.setAttribute('tabindex','0');
  document.body.appendChild(toggle);
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
  };
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggle.click();
  });
});
