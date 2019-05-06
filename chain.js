const get = require("./get.js");
const groupBy = require("./groupBy.js");
const pick = require("./pick.js");
const uniqBy = require("./uniqBy.js");

module.exports = function chain (value) {
    let val = value;

    let result = {
        get: (...args) => {
            val = get(val, ...args);
            return result;
        },
        groupBy: (...args) => {
            val = groupBy(val, ...args);
            return result;
        },
        pick: (...args) => {
            val = pick(val, ...args);
        },
        uniqBy: (...args) => {
            val = uniqBy(val, ...args);
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