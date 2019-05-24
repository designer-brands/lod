module.exports = function pick (arr) {
	if (!Array.isArray(arr)) {
		return void 0;
	}

	return arr[arr.length - 1];
};