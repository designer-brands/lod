const getAsObject = require("../src/getAsObject.js");

given("getAsObject method", function () {
	when("called with a value and a string path", function () {
		let obj, arr;

		beforeEach(function () {
			obj = {
				foo: {
					a: 1,
					b: {
						c: 2
					}
				},
				bar: 3
			};

			arr = [{
				foo: {
					a: 1,
					b: {
						c: 2
					}
				},
				bar: 3
			}];
		});

		then("it should return the value of the given path if it is an object", function () {
			expect(getAsObject(obj, "foo.b")).toEqual({c: 2});
			expect(getAsObject(arr, "0.foo.b")).toEqual({c: 2});
		});

		then("it should return an empty object if the value of the given path is not an object", function () {
			expect(getAsObject(obj, "foo.a")).toEqual({});
			expect(getAsObject(obj, "bar")).toEqual({});
			expect(getAsObject(arr, "0.foo.a")).toEqual({});
			expect(getAsObject(arr, "0.bar")).toEqual({});
			expect(getAsObject("abc", "length")).toEqual({});
			expect(getAsObject(1, "constructor")).toEqual({});
			expect(getAsObject(false, "constructor")).toEqual({});
		});

		then("it should return an empty object if the value of the given path does not exist", function () {
			expect(getAsObject(obj, "foo.c")).toEqual({});
			expect(getAsObject(obj, "foo.c.d")).toEqual({});
			expect(getAsObject(obj, "baz")).toEqual({});
			expect(getAsObject(arr, "0.foo.c")).toEqual({});
			expect(getAsObject(arr, "0.foo.c.d")).toEqual({});
			expect(getAsObject(arr, "0.baz")).toEqual({});
			expect(getAsObject("abc", "foo")).toEqual({});
			expect(getAsObject(1, "foo")).toEqual({});
			expect(getAsObject(false, "foo")).toEqual({});
			expect(getAsObject(void 0, "foo")).toEqual({});
			expect(getAsObject(null, "foo")).toEqual({});
		});
	});
});