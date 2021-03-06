const isObject = require("./isObject.js");

/**
 * Check if {@link value} is a non-empty object.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
 * @example
 * isNonEmptyObject({a: 1}); // true
 * isNonEmptyObject({}); // false
 * isNonEmptyObject(""); // false
*/
function isNonEmptyObject (obj) {
	return Boolean(
		isObject(obj) && Object.keys(obj).length
	);
}

module.exports = isNonEmptyObject;