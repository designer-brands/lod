const set = require("./helpers/set.js");
const isNonEmptyObject = require("./isNonEmptyObject.js");
const isNullOrUndefined = require("./isNullOrUndefined.js");

module.exports = function pick (obj, ...paths) {
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
};