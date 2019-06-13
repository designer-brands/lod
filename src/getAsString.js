const get = require("./get.js");
const defaultToString = require("./defaultToString.js");

/**
 * Get value at {@link path} in {@link source} and ensure it's a string.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {String} The value at {@link path} if it is a string; "" otherwise.
 * @example
 * let obj = {
 *     foo: "a",
 *     bar: {a: 1}
 * };
 *
 * getAsString(obj, "foo"); // "a"
 * getAsString(obj, "bar"); // ""
 * getAsString(obj, "baz"); // ""
 */
function getAsString (source, path) {
	return defaultToString(get(source, path));
}

module.exports = getAsString;