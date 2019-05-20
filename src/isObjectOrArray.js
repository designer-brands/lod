module.exports = function isObjectOrArray (value) {
	return value instanceof Object && "function" !== typeof value;
};