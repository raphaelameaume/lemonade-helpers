export function onFocus(element, fn) {
    element.addEventListener('focus', fn);

    return () => {
        element.removeEventListener('focus', fn);
    }
}