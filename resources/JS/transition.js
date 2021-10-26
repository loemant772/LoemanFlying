const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.Nav_Links');
const links = document.querySelectorAll('.Nav_Links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});