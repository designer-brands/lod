const isObjectOrArray = require("./isObjectOrArray.js");

/**
 * Set {@link value} at the {@link path} in the {@link object}.
 * @param {Object|Array} target The target to set the value.
 * @param {String} path The path to set the value.
 * @param {Any} value The value to set.
 * @return {Object} The passed in {@link object} if it works normally; an empty
 * object otherwise.
 */
function set (target, path, value) {
	if (!isObjectOrArray(target)) {
		return target;
	}

	if ("string" !== typeof path) {
		target[path] = value;

		return target;
	}

	let parts = path.split(".");
	let pointer = target;

	let l = parts.length;
	let lastPart = parts[l - 1];

	for (let i = 0; i < l - 1; ++i) {
		let part = parts[i];
		let nextPart = parts[i + 1];

		// create [] or {} as needed
		if (!isObjectOrArray(pointer[part])) {
			let isNumerical = nextPart.match(/^\d+$/);
			pointer[part] = isNumerical ? [] : {};
		}

		// go deeper
		pointer = pointer[part];
	}

	pointer[lastPart] = value;

	return target;
}

module.exports = set;