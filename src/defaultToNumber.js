module.exports = function defaultToNumber (value) {
	return "number" === typeof value ? value : 0;
};