const get = require("./get.js");
const defaultToArray = require("./defaultToArray.js");

/**
 * Get value at {@link path} in {@link source} and ensure it's an array.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {Array} The value at {@link path} if it is an array; [] otherwise.
 */
function getAsArray (source, path) {
	return defaultToArray(get(source, path));
}

module.exports = getAsArray;