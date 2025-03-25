export interface Manager {
    init(): void;
    onResize?(): void;
} 