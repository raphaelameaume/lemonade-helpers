import { onMouseUp } from "./onMouseUp.js";
import { onTouchEnd } from "./onTouchEnd.js";

export function onPointerUp(element, fn) {
    let offMouseUp = onMouseUp(element, fn);
    let offTouchEnd = onTouchEnd(element, fn);

    return () => {
        offMouseUp();
        offMouseUp = null;

        offTouchEnd();
        offTouchEnd = null;
    }
}