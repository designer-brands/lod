const get = require("./get.js");

/**
 * Get value at {@link path} in {@link source} and convert it to a boolean.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {Boolean} The value at {@link path} converted to a boolean.
 * @example
 * let obj = {
 *     foo: true,
 *     bar: 1,
 *     baz: 0
 * };
 *
 * getAsBoolean(obj, "foo"); // true
 * getAsBoolean(obj, "bar"); // true
 * getAsBoolean(obj, "baz"); // false
 * getAsBoolean(obj, "x"); // false
 */
function getAsBoolean (source, path) {
	return Boolean(get(source, path));
}

module.exports = getAsBoolean;