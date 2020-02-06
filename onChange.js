export function onChange(element, fn) {
    element.addEventListener('change', fn);

    return () => {
        element.removeEventListener('change', fn);
    };
}