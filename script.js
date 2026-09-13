document.addEventListener('DOMContentLoaded', function () {

    var navbar = document.getElementById('navbar');
    var menuBtn = document.getElementById('menuBtn');
    var navLinks = document.getElementById('navLinks');
    var links = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        navLinks.classList.toggle('show');
    }

    menuBtn.addEventListener('click', function () {
        toggleMenu();
    });

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        var windowHeight = window.innerHeight;
        reveals.forEach(function (el) {
            var top = el.getBoundingClientRect().top;
            if (top < windowHeight - 80) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    var form = document.getElementById('contactForm');
    var box = document.getElementById('messageBox');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            box.textContent = 'Please fill in all fields.';
            box.style.color = '#c0392b';
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            box.textContent = 'Please enter a valid email address.';
            box.style.color = '#c0392b';
            return;
        }

        box.textContent = 'Thank you, ' + name + '! Your message has been received.';
        box.style.color = '#2e7d32';
        form.reset();
    });

});
