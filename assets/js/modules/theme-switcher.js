export class ThemeSwitcher {
    constructor() {
        this.init();
    }

    init() {
        this.checkbox = document.getElementById('checkbox');
        if (!this.checkbox) return;

        this.loadSavedTheme();
        this.bindEvents();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.checkbox.checked = savedTheme === 'dark';
    }

    bindEvents() {
        this.checkbox.addEventListener('change', () => {
            const theme = this.checkbox.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
} 