export function onMouseLeave(element, fn, options = {}) {
    element.addEventListener('mouseleave', fn, options);

    return () => {
        element.removeEventListener('mouseleave', fn, options);
    };
}