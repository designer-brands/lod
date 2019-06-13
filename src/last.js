/**
 * Get the last element of {@link arr} array.
 * @param {Array} arr - The array.
 * @returns {Any} The last element of {@link arr} if it works properly; undefined otherwise.
 * @example
 * last([1, 2]); // 2
 * last([1]); // 1
 * last([]); // undefined
 * last(null); // undefined
 * last(""); // undefined
*/
function last (arr) {
	if (!Array.isArray(arr)) {
		return void 0;
	}

	return arr[arr.length - 1];
}

module.exports = last;