export function onBlur(element, fn) {
    element.addEventListener('blur', fn);

    return () => {
        element.removeEventListener('blur', fn);
    };
};