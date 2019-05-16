const get = require("./get.js");
const defaultToString = require("./defaultToString.js");

module.exports = function getAsString (obj, path) {
	return defaultToString(get(obj, path));
};