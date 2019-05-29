const identity = require("./helpers/identity.js");

module.exports = function uniqBy (arr, iteratee = identity) {
	if (!Array.isArray(arr)) {
		return [];
	}

	let mappedSet = new Set();
	let result = [];

	arr.forEach(element => {
		let mapped = iteratee(element);

		if (!mappedSet.has(mapped)) {
			mappedSet.add(mapped);
			result.push(element);
		}
	});

	return result;
};