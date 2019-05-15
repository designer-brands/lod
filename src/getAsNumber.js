const get = require("./get.js");
const defaultToNumber = require("./defaultToNumber.js");

module.exports = function getAsNumber (obj, path) {
    return defaultToNumber(get(obj, path));
}