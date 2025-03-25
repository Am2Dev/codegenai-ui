class FooterManager {
    constructor() {
        this.footerContainer = null;
        this.newsletterForm = null;
        this.FOOTER_PATH = './footer.html';
    }

    init() {
        this.loadFooter();
        this.bindEvents();
    }

    async loadFooter() {
        try {
            this.footerContainer = document.getElementById('footer-container');
            if (!this.footerContainer) {
                throw new Error('Footer container not found');
            }

            const response = await fetch(this.FOOTER_PATH);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            if (!html) {
                throw new Error('Empty footer content');
            }

            this.footerContainer.innerHTML = html;
            this.initializeNewsletterForm();
            console.log('Footer successfully loaded');
        } catch (error) {
            console.error('Error loading footer:', error);
            this.showErrorState();
        }
    }

    initializeNewsletterForm() {
        this.newsletterForm = document.getElementById('newsletter-form');
        if (this.newsletterForm) {
            this.newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
        }
    }

    async handleNewsletterSubmit(event) {
        event.preventDefault();
        
        if (!this.newsletterForm) return;

        const formData = new FormData(this.newsletterForm);
        const email = formData.get('email');

        try {
            console.log('Newsletter subscription for:', email);
            this.showNotification('Vielen Dank für Ihre Anmeldung!', 'success');
            this.newsletterForm.reset();
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            this.showNotification('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.', 'error');
        }
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `footer__notification footer__notification--${type}`;
        notification.textContent = message;

        const container = this.footerContainer?.querySelector('.footer__container');
        if (container) {
            container.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('footer__notification--show');
                setTimeout(() => {
                    notification.classList.remove('footer__notification--show');
                    setTimeout(() => {
                        container.removeChild(notification);
                    }, 300);
                }, 3000);
            }, 100);
        }
    }

    bindEvents() {
        document.addEventListener('click', (event) => {
            const target = event.target;
            const link = target.closest('a[href^="#"]');
            
            if (link) {
                event.preventDefault();
                const href = link.getAttribute('href');
                if (href) {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    }

    onResize() {
        // Handle resize events if needed
    }

    showErrorState() {
        if (this.footerContainer) {
            this.footerContainer.innerHTML = `
                <footer class="footer footer--error">
                    <div class="footer__container">
                        <p>Footer konnte nicht geladen werden. Bitte aktualisieren Sie die Seite.</p>
                    </div>
                </footer>
            `;
        }
    }
}

export { FooterManager }; 