import { onMouseDown } from "./onMouseDown.js";
import { onTouchStart } from "./onTouchStart.js";

export function onPointerDown(element, fn, options = {}) {
    let offMouseDown = onMouseDown(element, fn, options);
    let offTouchStart = onTouchStart(element, fn, options);

    return () => {
        offMouseDown();
        offMouseDown = null;

        offTouchStart();
        offTouchStart = null;
    };
}