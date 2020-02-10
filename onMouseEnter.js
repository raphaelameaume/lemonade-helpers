export function onMouseEnter(element, fn, options = {}) {
    element.addEventListener('mouseenter', fn, options);

    return () => {
        element.removeEventListener('mouseenter', fn, options);
    };
}