const isObjectOrArray = require("./helpers/isObjectOrArray.js");

/**
 * Check if {@link value} is an object.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
 * @example
 * isObject({}); // true
 * isObject({a: 1}); // true
 * isObject([]); // false
 * isObject(null); // false
 * isObject("a"); // false
*/
function isObject (value) {
	return Boolean(
		isObjectOrArray(value) && (!Array.isArray(value))
	);
}

module.exports = isObject;