import '@testing-library/jest-dom';

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
    class IntersectionObserver {
        constructor() { }
        observe() { }
        unobserve() { }
        disconnect() { }
    }

    // @ts-ignore
    window.IntersectionObserver = IntersectionObserver;
    // @ts-ignore
    global.IntersectionObserver = IntersectionObserver;
}


