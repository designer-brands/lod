const groupBy = require("@src/groupBy.js");

given("groupBy method", function () {
	when("called with a non-array type as the first argument ", function () {
		then("it should return an empty array as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: groupBy,
				expectedValue: []
			});

			expect(errors).toBe("");
		});
	});

	when("called with an array and an iteratee", function () {
		then("it should group array values by iteratee's returns", function () {
			let result = groupBy(
				[3, 21, 34, 5, 2, 4, 3, 1, 2, 1],
				val => val % 2 ? "odd" : "even"
			);

			expect(result).toEqual({
				odd: [3, 21, 5, 3, 1, 1],
				even: [34, 2, 4, 2]
			});
		});
	});
});