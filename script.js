const header = document.querySelector('.header');
const navbar = document.querySelector('.nav');

window.onscroll = function () { 
    if (window.scrollY > 100 ) {
        navbar.classList.add("nav__scroll");
        // navbar.classList.remove("nav-transparent");
    } 
    else {
        // navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav__scroll");
    }
};