let fns = [];
let COUNT = 0;

window.addEventListener('resize', () => {
    for (let i = 0; i < fns.length; i++) {
        fns[i].fn();
    }
});

export function onWindowResize(fn, { fire = false } = {}) {
    let index = COUNT++;

    fns.push({ index, fn });

    if (fire) fn();

    return () => {
        let idx;
        for (let i = 0; i < fns.length; i++) {
            if (fns[i].index === index) {
                idx = i;
                break;
            }
        }
        fns.splice(idx, 1);
    };
}