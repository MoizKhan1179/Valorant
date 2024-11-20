document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current nav item
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.agent-card, .news-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Fade in effect for map cards
    function revealMapCards() {
        const mapCards = document.querySelectorAll('.map-card.fade-in');
        mapCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', () => {
        revealOnScroll();
        revealMapCards();
    });
    
    // Initial check for both animations
    revealOnScroll();
    revealMapCards();

    // Add hover sound effect to buttons
    const buttons = document.querySelectorAll('.custom-btn, .custom-btn-small');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // You can add sound effect here if needed
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

// agent section


// You can add any JavaScript functionality here as needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners to buttons if needed
    const buttons = document.querySelectorAll('.custom-btn-small');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('More information about the agent will be displayed here.');
        });
    });
});

