const isNonEmptyObject = require("@src/isNonEmptyObject.js");

given("isNonEmptyObject method", function () {
	when("called with a non-object type", function () {
		then("it should return false as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["object"],
				fn: isNonEmptyObject,
				expectedValue: false
			});

			expect(errors).toBe("");
		});
	});

	when("called with an empty object", function () {
		then("it should return false", function () {
			expect(isNonEmptyObject({})).toBe(false);
		});
	});

	when("called with a non-empty object", function () {
		then("it should return true", function () {
			expect(isNonEmptyObject({a: 1})).toBe(true);
		});
	});
});