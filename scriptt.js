// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50 ? 'rgba(1, 87, 155, 0.98)' : 'rgba(2, 136, 209, 0.9)';
});

// Smooth scroll
document.querySelectorAll('.navbar nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll reveal animation
const sections = document.querySelectorAll('.about, .services, .projects, .contact');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });
sections.forEach(section => observer.observe(section));

// Contact form
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message Sent! I will contact you soon 😊');
    e.target.reset();
});

// 3D Tilt effect on cards
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        card.style.transform = `perspective(1000px) rotateX(${-y/20}deg) rotateY(${x/20}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});








