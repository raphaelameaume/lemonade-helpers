export function onMouseDown(element, fn, options = {}) {
    element.addEventListener('mousedown', fn, options);

    return () => {
        element.removeEventListener('mousedown', fn, options);
    };
}