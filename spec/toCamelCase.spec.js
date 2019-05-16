const toCamelCase = require("../src/toCamelCase.js");

given("toCamelCase method", function () {
	when("called with a space separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo bar")).toBe("fooBar");
		});
	});

	when("called with a dash separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo-bar")).toBe("fooBar");
		});
	});

	when("called with a colon separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo:bar")).toBe("fooBar");
		});
	});

	when("called with a comma separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo,bar")).toBe("fooBar");
		});
	});

	when("called with a dot separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo.bar")).toBe("fooBar");
		});
	});

	when("called with a $ separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo$bar")).toBe("fooBar");
		});
	});

	when("called with a :: separated string", function () {
		then("it should return a camel cased version", function () {
			expect(toCamelCase("foo::bar")).toBe("fooBar");
		});
	});
});