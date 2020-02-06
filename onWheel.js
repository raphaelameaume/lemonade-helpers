export function onWheel(element, fn) {
    let event = null;

    if ('onwheel' in document) {
        event = 'wheel';
    }

    if ('onmousewheel' in document) {
        event = 'mousewheel';
    }

    if (event) {
        element.addEventListener(event, fn);
    }

    return () => {
        if (event) {
            element.removeEventListener(event, fn);
        }
    }
};