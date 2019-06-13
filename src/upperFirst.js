/**
 * Convert the first char of {@link str} to uppercase.
 * @param {String} str The string to convert.
 * @return {String} The converted string.
 * @example
 * upperFirst("abc"); // "Abc"
 * upperFirst(""); // ""
 */
function upperFirst (str) {
	if ("string" !== typeof str) {
		return "";
	}

	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

module.exports = upperFirst;