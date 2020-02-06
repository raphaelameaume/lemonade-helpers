import { style } from "./style.js";

export function styles(element, props) {
    for (let key in props) {
        style(element, key, props[key]);
    }
};