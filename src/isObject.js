const isObjectOrArray = require("./helpers/isObjectOrArray.js");

module.exports = function isObject (obj) {
	return Boolean(
		isObjectOrArray(obj) && (!Array.isArray(obj))
	);
};