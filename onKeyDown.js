export function onKeyDown(element, fn, options = {}) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }

    element.addEventListener('keydown', fn, options);

    return () => {
        element.removeEventListener('keydown', fn, options);
    };
}