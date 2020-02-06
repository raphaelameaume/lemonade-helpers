export function onMouseEnter(element, fn) {
    element.addEventListener('mouseenter', fn);

    return () => {
        element.removeEventListener('mouseenter', fn);
    };
}