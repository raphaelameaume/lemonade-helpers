export function onTouchMove(element, fn, { passive = true } = {}) {
    element.addEventListener('touchmove', fn, { passive });

    return () => {
        element.removeEventListener('touchmove', fn, { passive });
    };
}