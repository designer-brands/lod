const identity = require("./helpers/identity.js");
const get = require("./get.js");

/**
 * Sort given array {@link arr} based on {@iteratee} and return a new array (shallow copy) so
 * that the original array {@link arr} is untouched.
 * @param {Array} arr The array to be sorted.
 * @param {Function|String} iteratee The iteratee for sorting if it's a function; the property
 * path in each element if it's a string.
 * @param {Boolean=} [isDescending=false] Whether or not to sort in descending order.
 * @return {Array} A new array with elements sorted based on {@iteratee}.
 * @example
 * let arr = [1, 3, 2];
 * sortBy(arr); // [1, 2, 3]
 *
 * arr = [{value: 1}, {value: 3}, {value: 2}];
 * sortBy(arr, element => element.value); // [{value: 1}, {value: 2}, {value: 3}]
 *
 * arr = [{value: 1}, {value: 3}, {value: 2}];
 * sortBy(arr, "value", true); // [{value: 3}, {value: 2}, {value: 1}]
 *
 * arr = [{
 *     inner: {
 *         value: 3
 *     }
 * }, {
 *     inner: {
 *         value: 1
 *     }
 * }];
 * sortBy(arr, "inner.value"); // [{value: 1}, {value: 3}]
 */
function sortBy (arr, iteratee = identity, isDescending) {
	if (!Array.isArray(arr)) {
		return [];
	}

	if ("string" === typeof iteratee) {
		let path = iteratee;
		iteratee = value => get(value, path);
	}

	return arr.slice().sort((a, b) => {
		let result = iteratee(a) < iteratee(b) ? -1 : 1;

		if (isDescending) {
			result = -result;
		}

		return result;
	});
}

module.exports = sortBy;