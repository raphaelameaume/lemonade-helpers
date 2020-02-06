import { onMouseDown } from "./onMouseDown.js";
import { onTouchStart } from "./onTouchStart.js";

export function onPointerDown(element, fn) {
    let offMouseDown = onMouseDown(element, fn);
    let offTouchStart = onTouchStart(element, fn);

    return () => {
        offMouseDown();
        offMouseDown = null;

        offTouchStart();
        offTouchStart = null;
    };
}