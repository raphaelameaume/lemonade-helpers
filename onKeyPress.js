export function onKeyPress(element, fn) {
    element.addEventListener('keypress', fn);

    return () => {
        element.removeEventListener('keypress', fn);
    };
}