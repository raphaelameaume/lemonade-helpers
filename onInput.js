export function onInput(element, fn) {
    element.addEventListener('input', fn);

    return () => {
        element.removeEventListener('input', fn);
    }
}