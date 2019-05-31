const isObject = require("./isObject.js");

/**
 * Check if {@link value} is a non-empty object.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
*/
function isNonEmptyObject (obj) {
	return Boolean(
		isObject(obj) && Object.keys(obj).length
	);
}

module.exports = isNonEmptyObject;