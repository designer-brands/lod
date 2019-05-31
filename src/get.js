const isNullOrUndefined = require("./isNullOrUndefined.js");

/**
 * Get value at {@link path} in {@link source}.
 * @param {Object|Array} source Where to get the value from.
 * @param {String} path The path of the value.
 * @param {Any=} defaultValue - The default value to return when the value at {@link path}
 * is {@link undefined} or does not exist.
 * @return {Any} The value at {@link path} if it exists and is not undefined;
 * {@link defaultValue} otherwise.
 */
function get (source, path, defaultValue) {
	if (isNullOrUndefined(source)) {
		return defaultValue;
	}

	if ("string" !== typeof path) {
		let value = source[path];
		return void 0 === value ? defaultValue : value;
	}

	let parts = path.split(".");

	for (let i = 0, l = parts.length; i < l; ++i) {
		if (isNullOrUndefined(source)) {
			return defaultValue;
		}

		let part = parts[i];
		source = source[part];
	}

	return void 0 === source ? defaultValue : source;
}

module.exports = get;