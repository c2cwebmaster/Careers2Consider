// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    });
});

// Mobile dropdown toggles
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parentLi = toggle.closest('.nav-dropdown');
            const wasOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
            if (!wasOpen) parentLi.classList.add('open');
        }
    });
});

// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    document.querySelectorAll('.dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
            const toggle = link.closest('.nav-dropdown').querySelector('.dropdown-toggle');
            if (toggle) toggle.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

