/**
 * Default {@link value} to a number.
 * @param {Any} value - The value to check.
 * @return {Number} {@link value} if it is already a number; 0 otherwise.
 */
function defaultToNumber (value) {
	return "number" === typeof value ? value : 0;
}

module.exports = defaultToNumber;