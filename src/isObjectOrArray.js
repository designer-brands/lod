module.exports = function isObjectOrArray (value) {
	return value instanceof Object && typeof value !== "function";
};