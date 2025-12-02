document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold:0.2 }
);
reveals.forEach(elem => observer.observe(elem));
