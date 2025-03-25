class ConceptDetails {
    constructor() {
        this.init();
    }

    init() {
        this.textArea = document.querySelector('.concept-details__text');
        if (this.textArea) {
            this.setConceptText();
        }
    }

    async setConceptText() {
        try {
            const response = await fetch('./data/concept-details.txt');
            const conceptText = await response.text();
            this.textArea.value = conceptText;
            this.adjustTextAreaHeight();
        } catch (error) {
            console.error('Fehler beim Laden des Konzept-Texts:', error);
        }
    }

    adjustTextAreaHeight() {
        this.textArea.style.height = '500px';
    }
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    new ConceptDetails();
}); 