const identity = require("./helpers/identity.js");

module.exports = function sortBy (arr, iteratee = identity, isDescending) {
	if (!Array.isArray(arr)) {
		return [];
	}

	if ("string" === typeof iteratee) {
		let key = iteratee;
		iteratee = value => value[key];
	}

	return arr.slice().sort((a, b) => {
		let result = iteratee(a) < iteratee(b) ? -1 : 1;

		if (isDescending) {
			result = -result;
		}

		return result;
	});
};