/**
 * Default {@link value} to an array.
 * @param {Any} value - The value to check.
 * @return {Array} {@link value} if it is already an array; [] otherwise.
 * @example
 * defaultToArray([]); // []
 * defaultToArray([1, 2, 3]); // [1, 2, 3]
 * defaultToArray(""); // []
 * defaultToArray(null); // []
 * defaultToArray(undefined); // []
 */
function defaultToArray (value) {
	return Array.isArray(value) ? value : [];
}

module.exports = defaultToArray;