// import '@fortawesome/fontawesome-free';
// import 'bootstrap.native';
import 'bootstrap';
import $ from 'jquery';
import 'popper.js';
import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]');

$('.navbar-toggler').on('click', () => {
    document.getElementById('sidenav').style.width = '250px';
    document.getElementById('sidenav-mask').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

$('.sidenav a, .sidenav-close').on('click', () => {
    setTimeout(() => {
        document.getElementById('sidenav').style.width = '0';
        document.getElementById('sidenav-mask').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 50);
});
