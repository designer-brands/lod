const identity = require("./helpers/identity.js");
const get = require("./get.js");

/**
 * Sort given array {@link arr} based on {@iteratee} and return a new array (shallow copy) so
 * that the original array {@link arr} is untouched. <br/><br/>
 *
 * This method is an exception to the {@link lod} philosophy. The reason this method is
 * provided is that the native {@link sort()} method's compare function has a confusing
 * [api design]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description}. In the referenced example, the parameters {@link a} and {@link b} in {@link compareFunction}
 * don't have a clear meaning and the values {@link 1} or {@link -1} to be returned are
 * magic numbers. It would be much more clear if we use the {@link sortBy} in {@link lod}.
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