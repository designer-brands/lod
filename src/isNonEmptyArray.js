module.exports = function isNonEmptyArray (arr) {
	return Boolean(
		Array.isArray(arr) && arr.length
	);
};