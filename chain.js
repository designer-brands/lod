const get = require("./get.js");
const groupBy = require("./groupBy.js");
const pick = require("./pick.js");
const uniqBy = require("./uniqBy.js");

module.exports = function chain (value) {
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
};