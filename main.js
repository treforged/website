
// Toggle mobile nav
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  burger && burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  document.querySelectorAll('#mobileNav a').forEach(a=>{
    a.addEventListener('click', ()=> mobileNav.classList.remove('open'));
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
});


// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("div");
  toggle.textContent = "🌓";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.fontSize = "26px";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = "9999";
  document.body.appendChild(toggle);
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
  };
});

