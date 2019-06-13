const isObject = require("./isObject.js");

/**
 * Default {@link value} to a plain old object.
 * @param {Any} value - The value to check.
 * @return {Object} {@link value} if it is already an object; {} otherwise.
 * @example
 * defaultToObject({}); // {}
 * defaultToObject({a: 123}); // {a: 123}
 * defaultToObject(0); // {}
 * defaultToObject([]); // {}
 * defaultToObject(undefined); // {}
 * defaultToObject(null); // 0
 */
function defaultToObject (value) {
	return isObject(value) ? value : {};
}

module.exports = defaultToObject;