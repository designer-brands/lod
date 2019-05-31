const get = require("./get.js");
const defaultToNumber = require("./defaultToNumber.js");

/**
 * Get value at {@link path} in {@link source} and ensure it's a number.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {Number} The value at {@link path} if it is a number; 0 otherwise.
 */
function getAsNumber (source, path) {
	return defaultToNumber(get(source, path));
}

module.exports = getAsNumber;