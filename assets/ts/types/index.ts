interface Manager {
    init(): void;
    onResize?(): void;
    destroy?(): void;
}

interface FAQItem {
    question: string;
    answer: string;
} 