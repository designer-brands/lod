/**
 * Check if {@link value} is a non-empty array.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
*/
function isNonEmptyArray (value) {
	return Boolean(
		Array.isArray(value) && value.length
	);
}

module.exports = isNonEmptyArray;