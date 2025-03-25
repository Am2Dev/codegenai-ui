import { Manager } from '../types/Manager';

export class DetailsManager implements Manager {
    private container!: HTMLElement | null;
    private textarea!: HTMLTextAreaElement | null;

    init(): void {
        this.container = document.querySelector('.details__container');
        this.textarea = document.querySelector('.details__text');
        if (!this.container || !this.textarea) return;

        this.loadContent();
    }

    private async loadContent(): Promise<void> {
        try {
            const response = await fetch('./assets/data/concept-details.txt');
            if (!response.ok) throw new Error('Failed to load content');

            const text = await response.text();
            this.textarea!.value = text;
            this.adjustHeight();
        } catch (error) {
            console.error('Error loading content:', error);
            this.textarea!.value = 'Error loading content. Please try again later.';
        }
    }

    private adjustHeight(): void {
        this.textarea!.style.height = 'auto';
        this.textarea!.style.height = `${this.textarea!.scrollHeight}px`;
    }

    onResize(): void {
        this.adjustHeight();
    }
} 