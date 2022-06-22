const header = document.querySelector(".header");
const navbar = document.querySelector(".nav");
const closeBtn = document.querySelector(".nav__close");
const showMenuBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navItmes = document.querySelector(".nav__item");

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.add("nav__scroll");
    // navbar.classList.remove("nav-transparent");
  } else {
    // navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav__scroll");
  }
};

showMenuBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(100%)";
});
