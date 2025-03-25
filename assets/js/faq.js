class FAQ {
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
        
        // Schließe alle anderen Karten
        this.cards.forEach(c => {
            if (c !== card && c.classList.contains('active')) {
                this.closeCard(c);
            }
        });

        if (isActive) {
            this.closeCard(card);
        } else {
            this.openCard(card);
        }
    }

    openCard(card) {
        card.classList.add('active');
        const answer = card.querySelector('.faq-card__answer');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
    }

    closeCard(card) {
        card.classList.remove('active');
        const answer = card.querySelector('.faq-card__answer');
        answer.style.maxHeight = '0';
    }
} 