const get = require("./get.js");

module.exports = function getAsBoolean (obj, path) {
	return Boolean(get(obj, path));
};