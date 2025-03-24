document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll für CTA-Buttons
    document.querySelectorAll('.cta-button[href^="#"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition + window.pageYOffset,
                behavior: 'smooth'
            });
        });
    });

    // Hover-Effekt für Buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 