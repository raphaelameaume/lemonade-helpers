export function onChange(element, fn, options = {}) {
    element.addEventListener('change', fn, options);

    return () => {
        element.removeEventListener('change', fn, options);
    };
}