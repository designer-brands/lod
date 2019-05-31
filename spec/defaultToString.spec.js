const defaultToString = require("@src/defaultToString.js");

given("defaultToString method", function () {
	when("called with a non-string type", function () {
		then("it should return an empty string as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["string"],
				fn: defaultToString,
				expectedValue: ""
			});

			expect(errors).toBe("");
		});
	});

	when("called with a string", function () {
		then("it should return the string itself", function () {
			expect(defaultToString("")).toBe("");
			expect(defaultToString("foo")).toBe("foo");
		});
	});
});