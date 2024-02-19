document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 90) {
            navbar.style.backgroundColor = 'greenyellow'; // Change background color on scroll
        } else {
            navbar.style.backgroundColor = '#000';
        }
    });
});


var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened')
    })