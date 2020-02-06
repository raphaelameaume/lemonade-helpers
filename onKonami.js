import { onKeyDown } from "./onKeyDown.js";

let fns = [];
let input = "";
const pattern = "38384040373937396665";
let offKeyDown;

export function onKonami(fn) {
    let index = fns.length;

    if (fns.length === 0) {
        offKeyDown = onKeyDown(document, (event) => {
            input += event.keyCode;

            if (input.length > pattern.length) {
                input = input.substr(input.length - pattern.length);
            }

            if (input === pattern) {
                event.preventDefault();
                input = "";

                fns.forEach( cb => cb !== null && cb());
            }
        });
    }

    fns.push(fn);

    return () => {
        fns[index] = null;

        let count = fns.reduce((total, cb) => {
            return cb === null ? (total + 1) : total;
        }, 0);

        if (count === 0) {
            offKeyDown();
            offKeyDown = null;
            fns = [];
        }
    };
};