const isNonEmptyArray = require("../src/isNonEmptyArray.js");

given("isNonEmptyArray method", function () {
	when("called with a non-array type", function () {
		then("it should return false as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: isNonEmptyArray,
				expectedValue: false
			});

			expect(errors).toBe("");
		});
	});

	when("called with an empty array", function () {
		then("it should return false", function () {
			expect(isNonEmptyArray([])).toBeFalsy();
		});
	});

	when("called with a non-empty array", function () {
		then("it should return true", function () {
			expect(isNonEmptyArray([1])).toBeTruthy();
		});
	});
});