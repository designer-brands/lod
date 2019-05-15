const get = require("./get.js");
const defaultToObject = require("./defaultToObject.js");

module.exports = function getAsObject (obj, path) {
    return defaultToObject(get(obj, path));
}