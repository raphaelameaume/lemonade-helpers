export function onKeyPress(element, fn) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }
    
    element.addEventListener('keypress', fn);

    return () => {
        element.removeEventListener('keypress', fn);
    };
}