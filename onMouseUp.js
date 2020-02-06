export function onMouseUp(element, fn) {
    element.addEventListener('mouseup', fn);

    return () => {
        element.removeEventListener('mouseup', fn);
    };
}