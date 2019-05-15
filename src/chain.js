const defaultToArray = require("./defaultToArray.js");
const defaultToNumber = require("./defaultToNumber.js");
const defaultToObject = require("./defaultToObject.js");
const defaultToString = require("./defaultToString.js");
const get = require("./get.js");
const getAsArray = require("./getAsArray.js");
const getAsNumber = require("./getAsNumber.js");
const getAsObject = require("./getAsObject.js");
const getAsString = require("./getAsString.js");
const groupBy = require("./groupBy.js");
const pick = require("./pick.js");
const uniqBy = require("./uniqBy.js");

module.exports = function chain (value) {
    let val = value;

    function wrap (fn) {
        return (...args) => {
            val = fn(val, ...args);
            return result;
        };
    }

    let result = {
        defaultToArray: wrap(defaultToArray),
        defaultToNumber: wrap(defaultToNumber),
        defaultToObject: wrap(defaultToObject),
        defaultToString: wrap(defaultToString),
        get: wrap(get),
        getAsArray: wrap(getAsArray),
        getAsNumber: wrap(getAsNumber),
        getAsObject: wrap(getAsObject),
        getAsString: wrap(getAsString),
        groupBy: wrap(groupBy),
        pick: wrap(pick),
        uniqBy: wrap(uniqBy),
        invoke: (fn, ...args) => {
            val = fn(val, ...args);
            return result;
        },
        value: () => val
    }

    return result;
};