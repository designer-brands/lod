const get = require("./get.js");
const isNonEmptyObject = require("./isNonEmptyObject.js");

module.exports = function pick (obj, ...paths) {
    if (!isNonEmptyObject(obj)) {
        return {};
    }

    let result = {};

    paths.forEach(path => {
        if (obj.hasOwnProperty(path)) {
            result[path] = get(obj, path);
        }
    });

    return result;
};