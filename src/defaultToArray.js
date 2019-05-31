/**
 * Default {@link value} to an array.
 * @param {Any} value - The value to check.
 * @return {Array} {@link value} if it is already an array; [] otherwise.
 */
function defaultToArray (value) {
	return Array.isArray(value) ? value : [];
}

module.exports = defaultToArray;