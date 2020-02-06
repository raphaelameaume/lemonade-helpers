import { onMouseMove } from "./onMouseMove.js";
import { onTouchMove } from "./onTouchMove.js";

export function onPointerMove(element, fn, options = {}) {
    let offMouseMove = onMouseMove(element, fn, options);
    let offTouchMove = onTouchMove(element, fn, options);

    return () => {
        offMouseMove();
        offMouseMove = null;

        offTouchMove();
        offTouchMove = null;
    };
}