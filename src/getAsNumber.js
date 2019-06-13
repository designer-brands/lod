const get = require("./get.js");
const defaultToNumber = require("./defaultToNumber.js");

/**
 * Get value at {@link path} in {@link source} and ensure it's a number.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @return {Number} The value at {@link path} if it is a number; 0 otherwise.
 * @example
 * let obj = {
 *     foo: 1,
 *     bar: true,
 *     baz: "1"
 * };
 *
 * getAsNumber(obj, "foo"); // 1
 * getAsNumber(obj, "bar"); // 0
 * getAsNumber(obj, "baz"); // 0
 * getAsNumber(obj, "x"); // 0
 */
function getAsNumber (source, path) {
	return defaultToNumber(get(source, path));
}

module.exports = getAsNumber;