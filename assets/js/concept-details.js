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

    setConceptText() {
        const conceptText = `1. Gesamtanalyse und Ergänzungen
Bisheriges Konzept:

CodeGenAI ist eine KI-gesteuerte DevOps-Plattform, die automatisierte Softwareentwicklung, Migration und kontinuierliche Optimierung ermöglicht.

Die Plattform integriert führende KI-Modelle (GPT-4, Claude, Gemini, DeepSeek usw.) und unterstützt eine breite Palette von Technologien wie Docker, Kubernetes, Jenkins, Azure, verschiedene Datenbanken (MySQL, MongoDB, Redis) sowie Versionsverwaltung (GitHub, GitLab, Bitbucket, Subversion).

[... Rest des Textes ...]`;

        this.textArea.value = conceptText;
        this.adjustTextAreaHeight();
    }

    adjustTextAreaHeight() {
        this.textArea.style.height = '500px';
        this.textArea.style.height = (this.textArea.scrollHeight + 20) + 'px';
    }
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    new ConceptDetails();
}); 