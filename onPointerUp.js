import { onMouseUp } from "./onMouseUp.js";
import { onTouchEnd } from "./onTouchEnd.js";

export function onPointerUp(element, fn, options) {
    let offMouseUp = onMouseUp(element, fn, options);
    let offTouchEnd = onTouchEnd(element, fn, options);

    return () => {
        offMouseUp();
        offMouseUp = null;

        offTouchEnd();
        offTouchEnd = null;
    }
}