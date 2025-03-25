// Haupt-App-Datei
import { ThemeSwitcher } from './modules/theme-switcher.js';
import { FAQ } from './modules/faq.js';
import { ConceptDetails } from './modules/concept-details.js';
import { Navigation } from './modules/navigation.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        this.initModules();
        this.bindEvents();
    }

    initModules() {
        this.themeSwitcher = new ThemeSwitcher();
        this.faq = new FAQ();
        this.conceptDetails = new ConceptDetails();
        this.navigation = new Navigation();
    }

    bindEvents() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// App starten
new App(); 