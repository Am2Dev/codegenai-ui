export class ConceptDetails {
    constructor() {
        this.init();
    }

    init() {
        this.container = document.querySelector('.concept-details');
        if (!this.container) return;

        this.textArea = this.container.querySelector('.concept-details__text');
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('./data/concept-details.txt');
            if (!response.ok) throw new Error('Laden fehlgeschlagen');
            
            const text = await response.text();
            this.textArea.value = text;
            this.adjustHeight();
        } catch (error) {
            console.error('Fehler beim Laden:', error);
            this.textArea.value = 'Fehler beim Laden der Inhalte.';
        }
    }

    adjustHeight() {
        this.textArea.style.height = 'auto';
        this.textArea.style.height = `${this.textArea.scrollHeight}px`;
    }
} 