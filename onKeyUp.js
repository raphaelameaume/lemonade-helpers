export function onKeyUp(element, fn, options = {}) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }

    element.addEventListener('keyup', fn, options);

    return () => {
        element.removeEventListener('keyup', fn, options);
    };
}