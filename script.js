const header = document.querySelector(".header");
const navbar = document.querySelector(".nav");
const closeBtn = document.querySelector(".nav__close");
const showMenuBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navItmes = document.querySelectorAll(".nav__item");

window.onscroll = function () {
  if (window.scrollY > 80) {
    navbar.classList.add("nav__scroll");
  } else {
    navbar.classList.remove("nav__scroll");
  }
};

showMenuBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(100%)";
});

navItmes.forEach((l) => l.addEventListener('click', () => {
  navMenu.style.transform = "translateX(100%)";
  console.log('salam')
}))