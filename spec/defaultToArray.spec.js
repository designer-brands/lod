const defaultToArray = require("../src/defaultToArray.js");

given("defaultToArray method", function () {
	when("called with a non-array type", function () {
		then("it should return an empty array as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: defaultToArray,
				expectedValue: []
			});

			expect(errors).toBe("");
		});
	});

	when("called with an array", function () {
		then("it should return the array itself", function () {
			let arr1 = [];
			expect(defaultToArray(arr1)).toBe(arr1);

			let arr2 = [1];
			expect(defaultToArray(arr2)).toBe(arr2);
		});
	});
});