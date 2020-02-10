export function onMouseUp(element, fn, options = {}) {
    element.addEventListener('mouseup', fn, options);

    return () => {
        element.removeEventListener('mouseup', fn, options);
    };
}