/**
 * Creates a debounced version of {@link fn}. When the debounced version is called
 * multiple times {@link fn} will not be called until the last attempt has elapsed
 * more than the {@link wait} period.
 * @param {Function} fn The function to be debounced.
 * @param {Number} [wait=100] The time to wait.
 * @return {Function} The debounced version of {@link fn}.
 * @example
 * let count = 0;
 *
 * function fn () {
 *     ++count;
 * }
 *
 * let debouncedFn = debounce(fn, 200);
 *
 * debouncedFn();
 * debouncedFn();
 * debouncedFn();
 * console.log(count); // logs 0
 * // although debouncedFn is called multiple times, fn is not called yet because it's not been 200ms yet
 *
 * setTimeout(() => {
 *     debouncedFn();
 *     debouncedFn();
 *     console.log(count); // logs 0
 * // fn is still not called yet because it's not been 200ms yet
 * }, 100);
 *
 * setTimeout(() => {
 *     console.log(count); // logs 1
 * // fn is called as it has passed 200ms since the last attempt (which occured at the 100th ms)
 * }, 301);
 */

function debounce (fn, wait) {
	if ("number" !== typeof wait || !isFinite(wait)) {
		wait = 100;
	}

	let timeout;

	return function debounced () {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(() => {
			fn.apply(this, arguments);
			timeout = null;
		}, wait, ...arguments);
	};
}

module.exports = debounce;