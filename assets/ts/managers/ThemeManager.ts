interface Manager {
    init(): void;
}

export class ThemeManager implements Manager {
    private toggle: HTMLInputElement | null;
    private readonly STORAGE_KEY = 'theme-preference';

    init(): void {
        this.toggle = document.getElementById('theme-toggle') as HTMLInputElement;
        if (!this.toggle) return;

        this.loadSavedTheme();
        this.bindEvents();
    }

    private loadSavedTheme(): void {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY) || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.toggle!.checked = savedTheme === 'dark';
    }

    private bindEvents(): void {
        this.toggle!.addEventListener('change', () => {
            const theme = this.toggle!.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);
        });
    }
} 