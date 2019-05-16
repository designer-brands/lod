const isObject = require("./isObject.js");

module.exports = function defaultToObject (value) {
	return isObject(value) ? value : {};
};