const isNullOrUndefined = require("./isNullOrUndefined.js");

module.exports = function get (obj, path, defaultValue) {
    if (isNullOrUndefined(obj)) {
        return defaultValue;
    }

    if ("string" !== typeof path) {
        let value = obj[path];
        return void 0 === value ? defaultValue : value;
    }

    let parts = path.split(".");

    for (let i = 0, l = parts.length; i < l; ++i) {
        if (isNullOrUndefined(obj)) {
            return defaultValue;
        }

        let part = parts[i];
        obj = obj[part];
    }

    return void 0 === obj ? defaultValue : obj;
};