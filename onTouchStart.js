export function onTouchStart(element, fn, { passive = true } = {}) {
    element.addEventListener('touchstart', fn, { passive });

    return () => {
        element.removeEventListener('touchstart', fn);
    }
}