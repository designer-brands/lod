const defaultToNumber = require("../src/defaultToNumber.js");

given("defaultToNumber method", function () {
	when("called with a non-number type", function () {
		then("it should return an empty number as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["number"],
				fn: defaultToNumber,
				expectedValue: 0
			});

			expect(errors).toBe("");
		});
	});

	when("called with a number", function () {
		then("it should return the number itself", function () {
			expect(defaultToNumber(0)).toBe(0);
			expect(defaultToNumber(1)).toBe(1);
		});
	});
});