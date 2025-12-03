// main.js

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  if (burger && mobileNav) {
    // Toggle on click
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Toggle on Enter/Space for accessibility
    burger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.code === "Space") {
        e.preventDefault();
        const isOpen = mobileNav.classList.toggle("open");
        burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileNav.contains(e.target) && !burger.contains(e.target)) {
        mobileNav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
});
