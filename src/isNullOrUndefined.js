/**
 * Check if {@link value} is {@link null} or {@link undefined}.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
 * @example
 * isNullOrUndefined(null); // true
 * isNullOrUndefined(undefined); // true
 * isNullOrUndefined(false); // false
 * isNullOrUndefined(0); // false
 * isNullOrUndefined(""); // false
*/
function isNullOrUndefined (value) {
	// eslint-disable-next-line eqeqeq
	return value == null;
}

module.exports = isNullOrUndefined;