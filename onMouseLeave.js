export function onMouseLeave(element, fn) {
    element.addEventListener('mouseleave', fn);

    return () => {
        element.removeEventListener('mouseleave', fn);
    };
}