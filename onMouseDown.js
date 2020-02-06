export function onMouseDown(element, fn) {
    element.addEventListener('mousedown', fn);

    return () => {
        element.removeEventListener('mousedown', fn);
    };
}