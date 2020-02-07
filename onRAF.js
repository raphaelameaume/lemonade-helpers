import { now } from "./now.js";

let _raf;
let fns = [];
let COUNT = 0;

let time, deltaTime, lastTime;

function loop() {
    _raf = requestAnimationFrame(loop);

    time = now();
    deltaTime = time - lastTime;
    lastTime = time;

    for (let i = 0; i < fns.length; i++) {
        fns[i].fn({ time, deltaTime });
    }
}

export function onRAF(fn) {
    if (fns.length === 0) {
        time = now();
        lastTime = time;
        deltaTime = 0;

        loop();
    }

    let index = COUNT++;
    fns.push({ index, fn });

    return () => {
        let idx;

        for (let i = 0; i < fns.length; i++) {
            if (fns[i].index === index) {
                idx = i;
                break;
            }
        }

        fns.splice(idx, 1);

        if (fns.length === 0) {
            cancelAnimationFrame(_raf);
        }
    };
}