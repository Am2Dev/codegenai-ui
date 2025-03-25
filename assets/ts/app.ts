import { Manager } from './types/Manager';
import { ThemeManager } from './managers/ThemeManager';
import { DetailsManager } from './managers/DetailsManager';
import { FAQManager } from './managers/FAQManager';
import { FooterManager } from './managers/FooterManager';

class App {
    private readonly managers: Manager[];

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

new App(); 