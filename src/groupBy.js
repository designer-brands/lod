const identity = require("./helpers/identity.js");

/**
 * Creates an object composed of keys generated from the results of running each element of
 * {@link arr} thru {@link iteratee}. The order of grouped values is determined by the order
 * they occur in {@link arr}. The corresponding value of each key is an array of elements
 * responsible for generating that key. {@link iteratee} is invoked with one argument: (value).
 * @param {Array} arr The array to iterate over.
 * @param {Function} [iteratee = identity] The iteratee to generate keys.
 * @return {Object} The composed object with elements grouped under its keys.
 * @example
 * let result = groupBy(
 *     [3, 21, 34, 5, 2, 4, 3, 1, 2, 1],
 *     val => val % 2 ? "odd" : "even"
 * );
 *
 * // result should be {
 * //     odd: [3, 21, 5, 3, 1, 1],
 * //     even: [34, 2, 4, 2]
 * // }
 * console.log(result);
 */

function groupBy (arr, iteratee = identity) {
	if (!Array.isArray(arr)) {
		return [];
	}

	return arr.reduce((acc, cur) => {
		let key = iteratee(cur);

		if (!acc[key]) {
			acc[key] = [];
		}

		acc[key].push(cur);

		return acc;
	}, {});
}

module.exports = groupBy;