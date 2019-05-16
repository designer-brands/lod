const isObject = require("./isObject.js");

module.exports = function isNonEmptyObject (obj) {
	return Boolean(
		isObject(obj) && Object.keys(obj).length
	);
};