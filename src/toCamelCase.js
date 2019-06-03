/**
 * Convert {@link str} to camel case.
 * @param {String} str The string to be converted.
 * @return {String}
 * @example
 * toCamelCase("foo bar"); // "fooBar"
 * toCamelCase("foo  bar"); // "fooBar"
 * toCamelCase("foo-bar"); // "fooBar"
 * toCamelCase("foo:bar"); // "fooBar"
 * toCamelCase("foo,bar"); // "fooBar"
 * toCamelCase("foo$bar"); // "fooBar"
 * toCamelCase("foo::bar"); // "fooBar"
 */

function toCamelCase (str) {
	return str.toLowerCase()
		.replace(
			/[^a-zA-Z0-9]+(.)/g,
			(match, char) => char.toUpperCase()
		);
}

module.exports = toCamelCase;