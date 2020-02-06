export function onKeyDown(element, fn) {
    element.addEventListener('keydown', fn);

    return () => {
        element.removeEventListener('keydown', fn);
    };
}