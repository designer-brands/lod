let counter = 0;

/**
 * Generate a unique id. If {@link prefix} is given, it will be prepended to the result.
 * @param {String} prefix The prefix.
 * @return {String} The generated unique id.
 */
function uniqueId (prefix = "") {
	return String(prefix) + (++counter);
}

module.exports = uniqueId;