const isObjectOrArray = require("./isObjectOrArray.js");

module.exports = function isNonEmptyObject (obj) {
    return Boolean(
        isObjectOrArray(obj) && (!Array.isArray(obj))
    );
};