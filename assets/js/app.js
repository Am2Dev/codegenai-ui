// Haupt-App-Datei
import { ThemeSwitcher } from './modules/theme-switcher.js';
import { FAQ } from './modules/faq.js';
import { ConceptDetails } from './modules/concept-details.js';
import { Navigation } from './modules/navigation.js';
import { ThemeManager } from './managers/ThemeManager.js';
import { FooterManager } from './managers/FooterManager.js';

class App {
    constructor() {
        this.managers = [
            new ThemeManager(),
            new FooterManager()
        ];
        this.init();
    }

    init() {
        this.managers.forEach(manager => manager.init());
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('load', () => {
            document.body.classList.add('is-loaded');
        });

        window.addEventListener('resize', this.debounce((event) => {
            this.managers.forEach(manager => manager.onResize?.());
        }, 250));
    }

    debounce(fn, delay) {
        let timeoutId;
        return (event) => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => fn(event), delay);
        };
    }
}

// App starten
new App(); 