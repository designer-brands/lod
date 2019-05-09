const isNullOrUndefined = require("./isNullOrUndefined.js");

module.exports = function isNonEmptyObject (obj) {
    return (obj instanceof Object) && Object.keys(obj).length;
};