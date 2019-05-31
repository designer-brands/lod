const getAsArray = require("@src/getAsArray.js");

given("getAsArray method", function () {
	when("called with a value and a string path", function () {
		let obj, arr;

		beforeEach(function () {
			obj = {
				foo: {
					a: [1, 2],
					b: 3
				},
				bar: 4
			};

			arr = [{
				foo: {
					a: [1, 2],
					b: 3
				},
				bar: 4
			}];
		});

		then("it should return the value of the given path if it is an array", function () {
			expect(getAsArray(obj, "foo.a")).toEqual([1, 2]);
			expect(getAsArray(arr, "0.foo.a")).toEqual([1, 2]);
		});

		then("it should return an empty array if the value of the given path is not an array", function () {
			expect(getAsArray(obj, "foo.b")).toEqual([]);
			expect(getAsArray(obj, "bar")).toEqual([]);
			expect(getAsArray(arr, "0.foo.b")).toEqual([]);
			expect(getAsArray(arr, "0.bar")).toEqual([]);
			expect(getAsArray("abc", "length")).toEqual([]);
			expect(getAsArray(1, "constructor")).toEqual([]);
			expect(getAsArray(false, "constructor")).toEqual([]);
		});

		then("it should return an empty array if the value of the given path does not exist", function () {
			expect(getAsArray(obj, "foo.c")).toEqual([]);
			expect(getAsArray(obj, "foo.c.d")).toEqual([]);
			expect(getAsArray(obj, "baz")).toEqual([]);
			expect(getAsArray(arr, "0.foo.c")).toEqual([]);
			expect(getAsArray(arr, "0.foo.c.d")).toEqual([]);
			expect(getAsArray(arr, "0.baz")).toEqual([]);
			expect(getAsArray("abc", "foo")).toEqual([]);
			expect(getAsArray(1, "foo")).toEqual([]);
			expect(getAsArray(false, "foo")).toEqual([]);
			expect(getAsArray(void 0, "foo")).toEqual([]);
			expect(getAsArray(null, "foo")).toEqual([]);
		});
	});
});