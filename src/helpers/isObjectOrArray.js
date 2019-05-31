/**
 * Check if {@link value} is a plain old object or array.
 * @param {Any} value The value to check.
 * @return {Boolean}
 */
function isObjectOrArray (value) {
	return value instanceof Object && "function" !== typeof value;
}

module.exports = isObjectOrArray;