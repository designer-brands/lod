const isObjectOrArray = require("@src/helpers/isObjectOrArray.js");

given("isObjectOrArray method", function () {
	when("called with a non-object and non-array argument", function () {
		then("it should return false as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["object", "array"],
				fn: isObjectOrArray,
				expectedValue: false
			});

			expect(errors).toBe("");
		});
	});

	when("called with an object", function () {
		then("it should return true", function () {
			expect(isObjectOrArray({})).toBe(true);
			expect(isObjectOrArray({a: 1})).toBe(true);
		});
	});

	when("called with an array", function () {
		then("it should return true", function () {
			expect(isObjectOrArray([])).toBe(true);
			expect(isObjectOrArray([1])).toBe(true);
		});
	});
});