import { Manager } from '../types/Manager';

export class FooterManager implements Manager {
    private footerContainer: HTMLElement | null = null;
    private newsletterForm: HTMLFormElement | null = null;
    private readonly FOOTER_PATH = './footer.html'; // Relativer Pfad angepasst

    init(): void {
        this.loadFooter();
        this.bindEvents();
    }

    private async loadFooter(): Promise<void> {
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
            console.log('Footer successfully loaded'); // Debug-Information
        } catch (error) {
            console.error('Error loading footer:', error);
            this.showErrorState();
        }
    }

    private initializeNewsletterForm(): void {
        this.newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
        if (this.newsletterForm) {
            this.newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
        }
    }

    private async handleNewsletterSubmit(event: Event): Promise<void> {
        event.preventDefault();
        
        if (!this.newsletterForm) return;

        const formData = new FormData(this.newsletterForm);
        const email = formData.get('email') as string;

        try {
            // Hier würde die API-Anfrage für den Newsletter-Service erfolgen
            console.log('Newsletter subscription for:', email);
            
            // Erfolgsmeldung anzeigen
            this.showNotification('Vielen Dank für Ihre Anmeldung!', 'success');
            this.newsletterForm.reset();
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            this.showNotification('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.', 'error');
        }
    }

    private showNotification(message: string, type: 'success' | 'error'): void {
        const notification = document.createElement('div');
        notification.className = `footer__notification footer__notification--${type}`;
        notification.textContent = message;

        const container = this.footerContainer?.querySelector('.footer__container');
        if (container) {
            container.appendChild(notification);

            // Animation und Entfernung
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

    private bindEvents(): void {
        // Smooth Scroll für Footer-Links
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
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

    onResize(): void {
        // Handle resize events if needed
    }

    private showErrorState(): void {
        // Implement the logic to show an error state in the footer
    }
} 