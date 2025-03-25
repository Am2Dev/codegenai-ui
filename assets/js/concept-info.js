class ConceptInfo {
    constructor() {
        this.init();
    }

    init() {
        this.container = document.querySelector('.concept-info');
        if (!this.container) return;

        this.cards = this.container.querySelectorAll('.concept-card');
        this.modal = document.querySelector('.concept-modal');
        this.modalContent = this.modal.querySelector('.concept-modal__content');
        this.modalTitle = this.modal.querySelector('.concept-modal__title');
        this.modalSections = this.modal.querySelector('.concept-modal__sections');
        this.closeButton = this.modal.querySelector('.concept-modal__close');

        this.bindEvents();
    }

    bindEvents() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.showModal(card.dataset.category));
        });

        this.closeButton.addEventListener('click', () => this.hideModal());
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hideModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.hideModal();
            }
        });
    }

    showModal(category) {
        const content = this.getContentForCategory(category);
        if (!content) return;

        this.modalTitle.textContent = content.title;
        this.modalSections.innerHTML = this.generateSectionsHTML(content.sections);
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        requestAnimationFrame(() => {
            this.modalContent.style.opacity = '1';
            this.modalContent.style.transform = 'translateY(0)';
        });
    }

    hideModal() {
        this.modalContent.style.opacity = '0';
        this.modalContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    generateSectionsHTML(sections) {
        return sections.map(section => `
            <div class="concept-modal__section">
                <h3 class="concept-modal__section-title">${section.title}</h3>
                <div class="concept-modal__text">${section.content}</div>
            </div>
        `).join('');
    }

    getContentForCategory(category) {
        const contents = {
            concept: {
                title: 'Konzept & Vision',
                sections: [
                    {
                        title: 'Plattform-Überblick',
                        content: `
                            <p>CodeGenAI ist eine KI-gesteuerte DevOps-Plattform, die modernste KI-Modelle wie GPT-4, 
                            Claude und Gemini integriert. Die Plattform ermöglicht automatisierte Softwareentwicklung, 
                            Migration und kontinuierliche Optimierung.</p>
                        `
                    },
                    {
                        title: 'Technische Integration',
                        content: `
                            <p>Unterstützung für:</p>
                            <ul>
                                <li>Docker und Kubernetes für Container-Orchestrierung</li>
                                <li>Jenkins für CI/CD-Pipelines</li>
                                <li>Verschiedene Datenbanken (MySQL, MongoDB, Redis)</li>
                                <li>Versionsverwaltung (GitHub, GitLab, Bitbucket)</li>
                            </ul>
                        `
                    }
                ]
            },
            deployment: {
                title: 'Bereitstellungsvarianten',
                sections: [
                    {
                        title: 'Online-Lösung (Cloud/GUI)',
                        content: `
                            <p>Eine webbasierte, benutzerfreundliche GUI für:</p>
                            <ul>
                                <li>Schnelle, zentrale Bereitstellung</li>
                                <li>Einfache Wartung und Updates</li>
                                <li>Flexible Skalierbarkeit</li>
                                <li>Integrierte Versionsverwaltung</li>
                            </ul>
                        `
                    },
                    {
                        title: 'Offline-Lösung (Linux-basiert)',
                        content: `
                            <p>Ein komplettes, lokal installiertes System für:</p>
                            <ul>
                                <li>Maximale Datensicherheit</li>
                                <li>Volle Kontrolle über sensible Informationen</li>
                                <li>Unabhängigkeit von Internetverbindungen</li>
                                <li>Compliance mit strengen Sicherheitsanforderungen</li>
                            </ul>
                        `
                    }
                ]
            }
            // Weitere Kategorien hier...
        };
        
        return contents[category];
    }
}

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    new ConceptInfo();
}); 