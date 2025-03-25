document.addEventListener('DOMContentLoaded', function() {
    const infoCategories = document.querySelectorAll('.info-category');
    const detailedContent = document.getElementById('detailed-content');
    const closeButton = document.querySelector('.close-button');
    
    // Content-Mapping für jede Kategorie
    const categoryContent = {
        concept: {
            title: 'Konzept & Vision',
            content: `
                <div class="content-section">
                    <h3>Plattform-Überblick</h3>
                    <p>CodeGenAI ist eine KI-gesteuerte DevOps-Plattform, die modernste KI-Modelle wie GPT-4, Claude und Gemini integriert...</p>
                </div>
                <div class="content-section">
                    <h3>Technische Integration</h3>
                    <p>Unterstützung für Docker, Kubernetes, Jenkins, verschiedene Datenbanken und Versionsverwaltungssysteme...</p>
                </div>
                <!-- Weitere Abschnitte hier -->
            `
        },
        deployment: {
            title: 'Bereitstellungsvarianten',
            content: `
                <div class="content-section">
                    <h3>Online-Lösung (Cloud/GUI)</h3>
                    <p>Webbasierte, benutzerfreundliche GUI für normale Nutzer und kleine Unternehmen...</p>
                </div>
                <div class="content-section">
                    <h3>Offline-Lösung (Linux-basiert)</h3>
                    <p>Komplettes, lokal installiertes System für maximale Sicherheit und Kontrolle...</p>
                </div>
            `
        },
        // Weitere Kategorien hier...
    };

    // Event Listeners
    infoCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.dataset.category;
            const content = categoryContent[categoryType];
            
            if (content) {
                detailedContent.querySelector('.content-title').textContent = content.title;
                detailedContent.querySelector('.content-body').innerHTML = content.content;
                detailedContent.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        detailedContent.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Schließen mit Escape-Taste
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            detailedContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Schließen beim Klick außerhalb des Content-Wrappers
    detailedContent.addEventListener('click', (e) => {
        if (e.target === detailedContent) {
            detailedContent.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 