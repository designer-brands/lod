const identity = require("./helpers/identity.js");

/**
 * Iterate over the array {@link arr}, de-duplicate it based on {@link iteratee} and return a
 * new array (shallow copy).
 * @param {Array} arr The array to iterate over.
 * @param {Function=} [iteratee=identity] The iteratee based on which the array gets de-duped.
 * @return {Array} The de-duped version of {@link arr}.
 * @example
 * uniqBy([1, 3, 3, 2, 1, 1, 4, 1, 2, 3]); // [1, 3, 2, 4]
 *
 * let arr = [{
 *     value: 1
 * }, {
 *     value: 2
 * }, {
 *     value: 1
 * }];
 *
 * // This logs [{
 * //     value: 1
 * // }, {
 * //     value: 2
 * // }]
 * console.log(uniqBy(arr, element => element.value));
 */

function uniqBy (arr, iteratee = identity) {
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
}

module.exports = uniqBy;