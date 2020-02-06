let _raf;
let fns = [];
let COUNT = 0;

function loop() {
    _raf = requestAnimationFrame(loop);

    for (let i = 0; i < fns.length; i++) {
        fns[i].fn();
    }
}

export function onRAF(fn) {
    if (fns.length === 0) {
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