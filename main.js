
document.addEventListener('DOMContentLoaded',function(){
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if(burger) burger.addEventListener('click',()=> mobileNav.classList.toggle('open'));
  document.querySelectorAll('.reveal').forEach(el=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
    },{threshold:0.12});
    obs.observe(el);
  });
});
