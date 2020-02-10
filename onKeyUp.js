export function onKeyUp(element, fn) {
    if (typeof element === 'function') {
        fn = element;
        element = document;
    }
    
    element.addEventListener('keyup', fn);

    return () => {
        element.removeEventListener('keyup', fn);
    };
}