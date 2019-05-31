const get = require("./get.js");

/**
 * Get value at {@link path} in {@link source} and convert it to a boolean.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {Boolean} The value at {@link path} converted to a boolean.
 */
function getAsBoolean (source, path) {
	return Boolean(get(source, path));
}

module.exports = getAsBoolean;