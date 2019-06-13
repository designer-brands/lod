let counter = 0;

/**
 * Generate a unique id. If {@link prefix} is given, it will be prepended to the result.
 * @param {String} prefix The prefix.
 * @return {String} The generated unique id.
 * @example
 * let id1 = uniqueId();
 * let id2 = uniqueId();
 * let id3 = uniqueId("foo");
 * let id4 = uniqueIUd("foo");
 * // id1, id2, id3, id4 should be different from each other
 */
function uniqueId (prefix = "") {
	return String(prefix) + (++counter);
}

module.exports = uniqueId;