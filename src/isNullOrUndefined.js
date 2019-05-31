/**
 * Check if {@link value} is {@link null} or {@link undefined}.
 * @param {Any} value - The value to check.
 * @returns {Boolean}
*/
function isNullOrUndefined (value) {
	// eslint-disable-next-line eqeqeq
	return value == null;
}

module.exports = isNullOrUndefined;