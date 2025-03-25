class ThemeSwitcher {
    constructor() {
        this.init();
    }

    init() {
        this.checkbox = document.getElementById('checkbox');
        if (!this.checkbox) return;

        // Gespeichertes Theme laden
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            this.checkbox.checked = savedTheme === 'dark';
        }

        this.bindEvents();
    }

    bindEvents() {
        this.checkbox.addEventListener('change', () => {
            const theme = this.checkbox.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
} 