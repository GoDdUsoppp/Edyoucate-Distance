const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("main-nav");
const icon = navToggle?.querySelector("i");

let isMenuOpen = false;
let lastScrollTop = 0;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    mobileMenu.style.opacity = "1";
    mobileMenu.style.pointerEvents = "auto";
    icon.className = "ti ti-x text-xl";
  } else {
    mobileMenu.style.maxHeight = "0";
    mobileMenu.style.opacity = "0";
    mobileMenu.style.pointerEvents = "none";
    icon.className = "ti ti-menu text-xl";
  }
}

navToggle?.addEventListener("click", toggleMenu);

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) toggleMenu();
  });
});

window.addEventListener("scroll", () => {
  if (isMenuOpen) return;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 80) {
    if (scrollTop > lastScrollTop) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
