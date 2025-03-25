class ThemeManager {
    constructor() {
        this.toggle = null;
        this.STORAGE_KEY = 'theme-preference';
    }

    init() {
        this.toggle = document.getElementById('theme-toggle');
        if (!this.toggle) return;

        this.loadSavedTheme();
        this.bindEvents();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY) || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.toggle.checked = savedTheme === 'dark';
    }

    bindEvents() {
        this.toggle.addEventListener('change', () => {
            const theme = this.toggle.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.STORAGE_KEY, theme);
        });
    }

    onResize() {
        // Handle resize events if needed
    }
}

export { ThemeManager }; 