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