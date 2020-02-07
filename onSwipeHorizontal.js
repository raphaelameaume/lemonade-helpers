import { onTouchStart } from "./onTouchStart.js";
import { onTouchMove } from "./onTouchMove.js";
import { onTouchEnd } from "./onTouchEnd.js";

export function onSwipeHorizontal(element, fn) {
    let startX = -1;
    let enabled = true;

    function handleStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleEnd(event) {
        enabled = true;
    }

    function handleMove(event) {
        if (startX < 0) return;

        let moveX = event.touches[0].clientX;
        let deltaX = moveX - startX;

        if (enabled) {
            if (deltaX > 30) {
                fn({ directionX: -1, directionY: 0 }); // left
                enabled = false;
            } else if (deltaX < -30) {
                fn({ directionX: 1, directionY: 0 }); // right
                enabled = false;
            }
        }
    }

    let offTouchMove = onTouchMove(element, handleMove, { passive: false });
    let offTouchStart = onTouchStart(element, handleStart);
    let offTouchEnd = onTouchEnd(element, handleEnd);

    return () => {
        offTouchStart();
        offTouchStart = null;

        offTouchMove();
        offTouchMove = null;

        offTouchEnd();
        offTouchEnd = null;

        startX = null;
        startY = null;
    };
}