export function onMouseMove(element, fn, options = {}) {
    element.addEventListener('mousemove', fn, options);

    return () => {
        element.removeEventListener('mousemove', fn, options);
    };
}