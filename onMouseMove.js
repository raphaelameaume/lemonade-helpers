export function onMouseMove(element, fn) {
    element.addEventListener('mousemove', fn);

    return () => {
        element.removeEventListener('mousemove', fn);
    };
}