const isObjectOrArray = require("./isObjectOrArray.js");

module.exports = function set (obj, path, value) {
	if (!isObjectOrArray(obj)) {
		return obj;
	}

	if ("string" !== typeof path) {
		obj[path] = value;

		return obj;
	}

	let parts = path.split(".");
	let pointer = obj;

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

	return obj;
};