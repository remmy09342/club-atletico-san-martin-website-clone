// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Video play button functionality
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would open a video modal or redirect to YouTube
            alert('Esta funcionalidad abriría el video en YouTube o en un modal.');
        });
    });
    
    // Image lazy loading fallback
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback image if the original fails to load
            if (!this.src.includes('placeholder')) {
                this.src = 'https://via.placeholder.com/400x250/dc143c/ffffff?text=Club+San+Martin';
                this.alt = 'Club Atlético San Martín - Imagen no disponible';
            }
        });
    });
    
    // Add loading animation to news cards
    const newsCards = document.querySelectorAll('.news-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    newsCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Simple pagination functionality
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.textContent !== 'Anterior' && this.textContent !== 'Siguiente') {
                e.preventDefault();
                
                // Remove active class from all page links
                pageLinks.forEach(pl => pl.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // In a real implementation, this would load different content
                console.log('Cargando página:', this.textContent);
            }
        });
    });
    
    // Sponsors carousel effect
    const sponsorsGrid = document.querySelector('.sponsors-grid');
    if (sponsorsGrid) {
        const sponsors = sponsorsGrid.querySelectorAll('.sponsor-item');
        let currentIndex = 0;
        
        // Auto-rotate sponsors every 3 seconds
        setInterval(() => {
            sponsors.forEach((sponsor, index) => {
                sponsor.style.opacity = index === currentIndex ? '1' : '0.7';
                sponsor.style.transform = index === currentIndex ? 'scale(1.05)' : 'scale(1)';
            });
            
            currentIndex = (currentIndex + 1) % sponsors.length;
        }, 3000);
    }
    
    // Search functionality (basic implementation)
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Buscar noticias...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 20px 0;
            width: 100%;
            max-width: 300px;
        `;
        
        const featuredNews = document.querySelector('.featured-news .container');
        if (featuredNews) {
            featuredNews.insertBefore(searchInput, featuredNews.firstChild);
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const newsCards = document.querySelectorAll('.news-card');
                
                newsCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const content = card.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || content.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = searchTerm === '' ? 'block' : 'none';
                    }
                });
            });
        }
    }
    
    // Initialize search functionality
    addSearchFunctionality();
    
    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #dc143c;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Error handling for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay to show loading state
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
    
    // Console welcome message
    console.log('%c¡Bienvenido al sitio web del Club Atlético San Martín!', 
                'color: #dc143c; font-size: 16px; font-weight: bold;');
    console.log('Sitio desarrollado con HTML5, CSS3 y JavaScript vanilla.');
});

// Utility functions
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        locale: 'es-ES'
    };
    return new Date(date).toLocaleDateString('es-ES', options);
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Export functions for potential use in other scripts
window.ClubSanMartin = {
    formatDate,
    truncateText
};
