const isObject = require("./isObject.js");

/**
 * Default {@link value} to a plain old object.
 * @param {Any} value - The value to check.
 * @return {Object} {@link value} if it is already an object; {} otherwise.
 */
function defaultToObject (value) {
	return isObject(value) ? value : {};
}

module.exports = defaultToObject;