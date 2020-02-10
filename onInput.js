export function onInput(element, fn, options = {}) {
    element.addEventListener('input', fn, options);

    return () => {
        element.removeEventListener('input', fn, options);
    }
}