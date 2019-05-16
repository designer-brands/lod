module.exports = function toCamelCase (str) {
	return str.toLowerCase()
		.replace(
			/[^a-zA-Z0-9]+(.)/g,
			(match, char) => char.toUpperCase()
		);
};