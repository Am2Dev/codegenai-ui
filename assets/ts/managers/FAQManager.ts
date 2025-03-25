export class FAQManager implements Manager {
    private container!: HTMLElement | null;
    private items!: NodeListOf<HTMLElement> | null;

    init(): void {
        this.container = document.querySelector('.faq__grid');
        if (!this.container) return;

        this.loadFAQItems();
        this.bindEvents();
    }

    private async loadFAQItems(): Promise<void> {
        try {
            const response = await fetch('/assets/data/faq.json');
            if (!response.ok) throw new Error('Failed to load FAQ');

            const items = await response.json();
            this.renderFAQItems(items);
        } catch (error) {
            console.error('Error loading FAQ:', error);
        }
    }

    private renderFAQItems(items: FAQItem[]): void {
        this.container!.innerHTML = items.map(item => `
            <div class="faq__item">
                <h3 class="faq__question">${item.question}</h3>
                <div class="faq__answer">${item.answer}</div>
            </div>
        `).join('');

        this.items = this.container!.querySelectorAll('.faq__item');
    }

    private bindEvents(): void {
        this.items?.forEach(item => {
            item.addEventListener('click', () => this.toggleItem(item));
        });
    }

    private toggleItem(item: HTMLElement): void {
        const isActive = item.classList.contains('is-active');
        this.items?.forEach(i => i.classList.remove('is-active'));
        if (!isActive) item.classList.add('is-active');
    }
} 