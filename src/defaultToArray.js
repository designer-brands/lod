module.exports = function defaultToArray (value) {
	return Array.isArray(value) ? value : [];
};