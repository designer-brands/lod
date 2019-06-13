/**
 * Default {@link value} to a number.
 * @param {Any} value - The value to check.
 * @return {Number} {@link value} if it is already a number; 0 otherwise.
 * @example
 * defaultToNumber(0); // 0
 * defaultToNumber(1); // 1
 * defaultToNumber([]); // 0
 * defaultToNumber("a"); // 0
 * defaultToNumber(null); // 0
 * defaultToNumber(undefined); // 0
 */
function defaultToNumber (value) {
	return "number" === typeof value ? value : 0;
}

module.exports = defaultToNumber;