// Toggle menu icon and navbar visibility
const toggleMenu = () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelector('#menu-icon').addEventListener('click', toggleMenu);

// Handle scroll events
const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    // Update active link based on scroll position
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Toggle sticky class on header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon and navbar when clicking on a nav link
    document.querySelector('#menu-icon').classList.remove('bx-x');
    document.querySelector('.navbar').classList.remove('active');
};

window.addEventListener('scroll', handleScroll);

// Initialize Swiper
const initializeSwiper = () => {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

initializeSwiper();

// Initialize ScrollReveal
const initializeScrollReveal = () => {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    }).reveal('.home-content, .heading', { origin: 'top' })
        .reveal('.home-img, .skills-row, .services-container, .portfolio-box, .contact form, .about-content, .about-content h2', { origin: 'bottom' })
        .reveal('.home-content h1, .about-img', { origin: 'left' })
        .reveal('.home-content p', { origin: 'right' });
};

initializeScrollReveal();
