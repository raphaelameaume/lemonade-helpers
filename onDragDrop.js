import { onPointerDown } from "./onPointerDown.js";
import { onPointerMove } from "./onPointerMove.js";
import { onPointerUp } from "./onPointerUp.js";
import { onMouseLeave } from "./onMouseLeave.js";

export function onDragDrop(element, fn, { outsideElement = document } = {}) {
    let dragged = false;
    let dragging = false;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let deltaX = 0;
    let deltaY = 0;

    let offPointerMove = onPointerMove(outsideElement, (moveEvent) => {
        moveEvent.preventDefault();

        if (!dragging) return;

        const isTouchMove = moveEvent.touches && moveEvent.touches.length > 0;

        dragged = true;

        currentX = isTouchMove ? moveEvent.touches[0].clientX : moveEvent.clientX;
        currentY = isTouchMove ? moveEvent.touches[0].clientY : moveEvent.clientY;

        deltaX = currentX - startX;
        deltaY = currentY - startY;

        trigger();
    }, { passive: false });

    let offPointerDown = onPointerDown(element, (downEvent) => {
        const isTouchDown = downEvent.touches && downEvent.touches.length > 0;

        startX = isTouchDown ? downEvent.touches[0].clientX : downEvent.clientX;
        startY = isTouchDown ? downEvent.touches[0].clientY : downEvent.clientY;

        currentX = startX;
        currentY = startY;

        deltaX = 0;
        deltaY = 0;
        
        dragging = true;

        trigger();
    });

    let offMouseLeave = onMouseLeave(element, (event) => {
        dragging = false;

        trigger();
    });

    let offPointerUp = onPointerUp(outsideElement, () => {
        dragging = false;

        trigger();
    })

    function trigger() {
        fn({ dragged, dragging, deltaX, deltaY, startX, startY, currentX, currentY });
    }

    return () => {
        offPointerDown();
        offPointerDown = null;

        offPointerMove();
        offPointerMove = null;

        offPointerUp();
        offPointerUp = null;

        offMouseLeave();
        offMouseLeave = null;
    };
}