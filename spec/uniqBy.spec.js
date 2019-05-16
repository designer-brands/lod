const uniqBy = require("../src/uniqBy.js");

given("uniqBy method", function () {
	when("called with a non-array type as the first argument", function () {
		then("it should return an empty array as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: uniqBy,
				expectedValue: []
			});

			expect(errors).toBe("");
		});
	});

	when("called with an array", function () {
		then("it should return a new array with de-duped elements", function () {
			expect(uniqBy([1, 3, 3, 2, 1, 1, 4, 1, 2, 3])).toEqual([1, 3, 2, 4]);
		});
	});

	when("called with an array and an iteratee", function () {
		then("it should return a new array with de-duped elements based on the iteratee's returns", function () {
			let arr = [{
				value: 1
			}, {
				value: 2
			}, {
				value: 1
			}];

			let result = uniqBy(arr, element => element.value);
			expect(result).toEqual([{
				value: 1
			}, {
				value: 2
			}]);
		});
	});
});