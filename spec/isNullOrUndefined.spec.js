const isNullOrUndefined = require("../src/isNullOrUndefined.js");

given("isNullOrUndefined method", function () {
	when("it is called with neither null nor undefined", function () {
		then("it should return false as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["null", "undefined"],
				fn: isNullOrUndefined,
				expectedValue: false
			});

			expect(errors).toBe("");
		});
	});

	when("it is called with null", function () {
		then("it should return true", function () {
			expect(isNullOrUndefined(null)).toBeTruthy();
		});
	});

	when("it is called with undefined", function () {
		then("it should return true", function () {
			expect(isNullOrUndefined(void 0)).toBeTruthy();
		});
	});
});