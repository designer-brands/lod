/**
 * Check if {@link value} is a non-empty array.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
 * @example
 * isNonEmptyArray([1]); // true
 * isNonEmptyArray([]); // false
 * isNonEmptyArray(""); // false
*/
function isNonEmptyArray (value) {
	return Boolean(
		Array.isArray(value) && value.length
	);
}

module.exports = isNonEmptyArray;