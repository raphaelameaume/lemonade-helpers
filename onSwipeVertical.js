import { onTouchStart } from "./onTouchStart.js";
import { onTouchMove } from "./onTouchMove.js";
import { onTouchEnd } from "./onTouchEnd.js";

export function onSwipeVertical(element, fn) {
    let startY = -1;
    let enabled = true;

    function handleStart(event) {
        startY = event.touches[0].clientY;
    }

    function handleEnd(event) {
        enabled = true;
    }

    function handleMove(event) {
        if (startY < 0) return;

        let moveY = event.touches[0].clientY;
        let deltaY = moveY - startY;

        if (enabled) {
            if (deltaY > 30) {
                fn({ directionX: 0, directionY: -1 }); // top
                enabled = false;
            } else if (deltaY < -30) {
                fn({ directionX: 0, directionY: 1 }); // bottom
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

        startY = null;
    };
}