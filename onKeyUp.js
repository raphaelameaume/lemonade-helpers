export function onKeyUp(element, fn) {
    element.addEventListener('keyup', fn);

    return () => {
        element.removeEventListener('keyup', fn);
    };
}