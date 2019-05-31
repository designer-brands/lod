/**
 * Default {@link value} to a string.
 * @param {Any} value - The value to check.
 * @return {String} {@link value} if it is already a string; "" otherwise.
 */
function defaultToString (value) {
	return "string" === typeof value ? value : "";
}

module.exports = defaultToString;