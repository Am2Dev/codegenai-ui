import { Manager } from './types/Manager.js';
import { ThemeManager } from './managers/ThemeManager.js';
import { DetailsManager } from './managers/DetailsManager.js';
import { FAQManager } from './managers/FAQManager.js';
import { FooterManager } from './managers/FooterManager.js';

class App {
    private readonly managers: any[];

    constructor() {
        this.managers = [
            new ThemeManager(),
            new DetailsManager(),
            new FAQManager(),
            new FooterManager()
        ];
        this.init();
    }

    private init(): void {
        this.managers.forEach(manager => manager.init());
        this.bindEvents();
    }

    private bindEvents(): void {
        window.addEventListener('load', () => {
            document.body.classList.add('is-loaded');
        });

        window.addEventListener('resize', this.debounce((event: UIEvent) => {
            this.managers.forEach(manager => manager.onResize?.());
        }, 250));
    }

    private debounce(fn: (event: UIEvent) => void, delay: number): (event: UIEvent) => void {
        let timeoutId: number;
        return (event: UIEvent) => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => fn(event), delay);
        };
    }
}

// Initialize app
new App(); 