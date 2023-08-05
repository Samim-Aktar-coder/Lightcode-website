//!============ Open mobile menu ===========
let menuOpenBtn = document.querySelector('.menu-open');
let menuCloseBtn = document.querySelector('.menu-close');
let menu = document.querySelector('.mobile-menu');
let navLinks = document.querySelectorAll('.nav-list li');

menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('show');
});


menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('show');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

//!============= SCROLL-NAVBAR============
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let pageY = window.scrollY;
    if (pageY > 70) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-b-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-b-color-gray');
    }
});