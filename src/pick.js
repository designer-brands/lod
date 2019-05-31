const set = require("./helpers/set.js");
const isNonEmptyObject = require("./isNonEmptyObject.js");
const isNullOrUndefined = require("./isNullOrUndefined.js");

/**
 * Creates an object composed of the picked {@link obj} properties. If the value of a given path
 * is null or undefined or the last part of the path is is not the corresponding object's own
 * property, that path will be ignored.
 * @param {Object} obj - The source object.
 * @param {...String} paths - The paths from where values should be picked.
 * @returns {Object} The new object with picked values at given {@link ...paths}.
 * @example
 * let obj = {
 *     foo: [{
 *         id: "#1",
 *         value: 1
 *     }, {
 *         id: "#2",
 *         value: 2
 *     }],
 *     x: 55,
 *     y: {
 *         id: "y",
 *         value: "yy"
 *     }
 * };
 *
 * let result = pick(obj, "foo.0.value", "foo.notExist", "y");
 *
 * // This logs {
 * //     foo: [{
 * //         value: 1
 * //     }],
 * //     y: {
 * //         id: "y",
 * //         value: "yy"
 * //     }
 * // }
 * console.log(result);
*/

function pick (obj, ...paths) {
	if (!isNonEmptyObject(obj)) {
		return {};
	}

	let result = {};

	paths.forEach(path => {
		let parts = path.split(".");
		let pointer = obj;
		let lastPart = parts.pop();

		for (let i = 0, l = parts.length; i < l; ++i) {
			let part = parts[i];

			if (isNullOrUndefined(pointer) || !pointer.hasOwnProperty(part)) {
				return;
			}

			// go deeper
			pointer = pointer[part];
		}

		if (pointer.hasOwnProperty(lastPart)) {
			set(result, path, pointer[lastPart]);
		}
	});

	return result;
}

module.exports = pick;