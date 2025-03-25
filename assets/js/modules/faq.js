export class FAQ {
    constructor() {
        this.init();
    }

    init() {
        this.container = document.querySelector('.faq');
        if (!this.container) return;

        this.cards = this.container.querySelectorAll('.faq-card');
        this.bindEvents();
    }

    bindEvents() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.toggleCard(card));
        });
    }

    toggleCard(card) {
        const isActive = card.classList.contains('active');
        this.cards.forEach(c => c.classList.remove('active'));
        if (!isActive) card.classList.add('active');
    }
} 