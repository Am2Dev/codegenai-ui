export class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.initSmoothScroll();
        this.initMobileNav();
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    initMobileNav() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('#nav');
        
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                toggle.classList.toggle('active');
            });
        }
    }
} 