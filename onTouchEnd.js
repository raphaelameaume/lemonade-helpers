export function onTouchEnd(element, fn, { passive = true } = {}) {
    element.addEventListener('touchend', fn, { passive });

    return () => {
        element.removeEventListener('touchend', fn);
    };
}