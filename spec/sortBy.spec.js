const sortBy = require("@src/sortBy.js");

given("sortBy method", function () {
	when("called with a non-array argument", function () {
		then("it should return an empty array", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["array"],
				fn: sortBy,
				expectedValue: []
			});

			expect(errors).toBe("");
		});
	});

	when("called with an array", function () {
		then("it should return a new array sorted in ascending order", function () {
			let arr = [1, 3, 2];
			let result = sortBy(arr);

			expect(result).not.toBe(arr);
			expect(result).toEqual([1, 2, 3]);
		});
	});

	when("called with an array, and an iteratee function", function () {
		then("it should return a new array sorted in ascending order based on the iteratee", function () {
			let arr = [{
				value: 1
			}, {
				value: 3
			}, {
				value: 2
			}];

			let result = sortBy(arr, element => element.value);

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				value: 1
			}, {
				value: 2
			}, {
				value: 3
			}]);
		});
	});

	when("called with an array, and a key", function () {
		then("it should return a new array sorted by the key in ascending order", function () {
			let arr = [{
				value: 1
			}, {
				value: 3
			}, {
				value: 2
			}];

			let result = sortBy(arr, "value");

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				value: 1
			}, {
				value: 2
			}, {
				value: 3
			}]);
		});
	});

	when("called with an array, and a path", function () {
		then("it should return a new array sorted by the value at the given path in ascending order", function () {
			let arr = [{
				inner: {
					value: 1
				}
			}, {
				inner: {
					value: 3
				}
			}, {
				inner: {
					value: 2
				}
			}];

			let result = sortBy(arr, "inner.value");

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				inner: {
					value: 1
				}
			}, {
				inner: {
					value: 2
				}
			}, {
				inner: {
					value: 3
				}
			}]);
		});
	});

	when("called with an array, an iteratee function and true", function () {
		then("it should return a new array sorted in descending order based on the iteratee", function () {
			let arr = [{
				value: 1
			}, {
				value: 3
			}, {
				value: 2
			}];

			let result = sortBy(arr, element => element.value, true);

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				value: 3
			}, {
				value: 2
			}, {
				value: 1
			}]);
		});
	});

	when("called with an array, a key and true", function () {
		then("it should return a new array sorted by the key in descending order", function () {
			let arr = [{
				value: 1
			}, {
				value: 3
			}, {
				value: 2
			}];

			let result = sortBy(arr, "value", true);

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				value: 3
			}, {
				value: 2
			}, {
				value: 1
			}]);
		});
	});

	when("called with an array, a path and true", function () {
		then("it should return a new array sorted by the value at the given path in descending order", function () {
			let arr = [{
				inner: {
					value: 1
				}
			}, {
				inner: {
					value: 3
				}
			}, {
				inner: {
					value: 2
				}
			}];

			let result = sortBy(arr, "inner.value", true);

			expect(result).not.toBe(arr);
			expect(result).toEqual([{
				inner: {
					value: 3
				}
			}, {
				inner: {
					value: 2
				}
			}, {
				inner: {
					value: 1
				}
			}]);
		});
	});
});