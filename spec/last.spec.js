const last = require("@src/last.js");

given("last method", function () {
	when("called with a non-array", function () {
		then("it should return undefined as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: last,
				expectedValue: void 0
			});

			expect(errors).toBe("");
		});
	});

	when("called with an empty array", function () {
		then("it should return undefined", function () {
			expect(last([])).toBeUndefined();
		});
	});

	when("called with a non empty array", function () {
		then("it should return the last element of the array", function () {
			expect(last([1, 2])).toBe(2);

			let a = {
				value: 1
			};

			let b = {
				value: 2
			};

			expect(last([a, b])).toBe(b);
		});
	});
});