export function onKeyDown(element, fn) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }
    
    element.addEventListener('keydown', fn);

    return () => {
        element.removeEventListener('keydown', fn);
    };
}