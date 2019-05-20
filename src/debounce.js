module.exports = function debounce (fn, wait) {
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
};