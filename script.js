// ===================================
// THEME TOGGLE FUNCTIONALITY
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateToggleIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    toggleIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// ===================================
// 3D TILT EFFECT ON CARDS
// ===================================
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10; // Max 10 degrees
        const rotateY = ((x - centerX) / centerX) * -10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

// ===================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for children
            const children = entry.target.querySelectorAll('.glass, .project-card, .tech-item, .education-item, .certification-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all sections and cards
const sectionsToObserve = document.querySelectorAll('section, .glass, .fade-in');
sectionsToObserve.forEach(section => {
    section.classList.add('scroll-fade-in');
    observer.observe(section);
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ENHANCED CARD ANIMATIONS ON LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body::before');
        if (parallax) {
            document.body.style.setProperty('--scroll', scrolled * 0.5 + 'px');
        }
    });
    
    // Add hover sound effect (optional - can be commented out)
    const cards = document.querySelectorAll('.glass, .project-card, .tech-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// ===================================
// TECH STACK ICON ROTATION ON HOVER
// ===================================
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotateY(360deg)';
            icon.style.transition = 'transform 0.6s ease';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotateY(0deg)';
        }
    });
});

// ===================================
// CURSOR GLOW EFFECT (OPTIONAL)
// ===================================
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(14, 165, 233, 0.6), transparent);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
};

// Uncomment to enable cursor glow effect
// createCursorGlow();

// ===================================
// PROJECT CARD CLICK ANALYTICS (Optional)
// ===================================
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const projectName = link.querySelector('h3')?.textContent;
        console.log(`Project clicked: ${projectName}`);
        // Add analytics tracking here if needed
    });
});
