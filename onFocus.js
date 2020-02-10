export function onFocus(element, fn, options = {}) {
    element.addEventListener('focus', fn, options);

    return () => {
        element.removeEventListener('focus', fn, options);
    }
}