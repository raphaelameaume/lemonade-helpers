export function onClick(element, fn) {
    element.addEventListener('click', fn);

    return () => {
        element.removeEventListener('click', fn);
    }
}