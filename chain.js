import get from "./get.js";
import groupBy from "./groupBy.js";
import pick from "./pick.js";
import uniqBy from "./uniqBy.js";

export default function chain (value) {
    let val = value;

    let result = {
        get: () => {
            val = get(val, ...arguments);
            return result;
        },
        groupBy: () => {
            val = groupBy(val, ...arguments);
            return result;
        },
        pick: () => {
            val = pick(val, ...arguments);
        },
        uniqBy: () => {
            val = uniqBy(val, ...arguments);
            return result;
        },
        invoke: (fn, ...args) => {
            val = fn(...args);
            return result;
        },
        value: () => val
    }

    return result;
}
