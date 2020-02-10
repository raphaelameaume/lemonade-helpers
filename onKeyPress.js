export function onKeyPress(element, fn, options = {}) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }

    element.addEventListener('keypress', fn, options);

    return () => {
        element.removeEventListener('keypress', fn, options);
    };
}