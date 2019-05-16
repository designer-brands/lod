const get = require("./get.js");
const defaultToArray = require("./defaultToArray.js");

module.exports = function getAsArray (obj, path) {
	return defaultToArray(get(obj, path));
};