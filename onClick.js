export function onClick(element, fn, options = {}) {
    element.addEventListener('click', fn, options);

    return () => {
        element.removeEventListener('click', fn, options);
    }
}