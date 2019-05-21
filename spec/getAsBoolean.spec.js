const getAsBoolean = require("../src/getAsBoolean.js");

given("getAsBoolean method", function () {
	when("called with a value and a string path", function () {
		let obj, arr;

		beforeEach(function () {
			obj = {
				foo: {
					a: false,
					b: true,
					c: 1,
					d: 0,
					e: "",
					f: "a"
				},
				bar: [],
				baz: {}
			};

			arr = [{
				foo: {
					a: false,
					b: true,
					c: 1,
					d: 0,
					e: "",
					f: "a"
				},
				bar: [],
				baz: {}
			}];
		});

		then("it should return the value of the given path if it is a boolean", function () {
			expect(getAsBoolean(obj, "foo.a")).toEqual(false);
			expect(getAsBoolean(obj, "foo.b")).toEqual(true);
			expect(getAsBoolean(arr, "0.foo.a")).toEqual(false);
			expect(getAsBoolean(arr, "0.foo.b")).toEqual(true);
		});

		then("it should convert the value of the given path if it is not a boolean", function () {
			expect(getAsBoolean(obj, "foo.c")).toEqual(true);
			expect(getAsBoolean(obj, "foo.d")).toEqual(false);
			expect(getAsBoolean(obj, "foo.e")).toEqual(false);
			expect(getAsBoolean(obj, "foo.f")).toEqual(true);
			expect(getAsBoolean(obj, "bar")).toEqual(true);
			expect(getAsBoolean(obj, "baz")).toEqual(true);

			expect(getAsBoolean(arr, "0.foo.c")).toEqual(true);
			expect(getAsBoolean(arr, "0.foo.d")).toEqual(false);
			expect(getAsBoolean(arr, "0.foo.e")).toEqual(false);
			expect(getAsBoolean(arr, "0.foo.f")).toEqual(true);
			expect(getAsBoolean(arr, "0.bar")).toEqual(true);
			expect(getAsBoolean(arr, "0.baz")).toEqual(true);

			expect(getAsBoolean("abc", "length")).toEqual(true);
			expect(getAsBoolean(1, "constructor")).toEqual(true);
			expect(getAsBoolean(false, "constructor")).toEqual(true);
		});

		then("it should return false if the value of the given path does not exist", function () {
			expect(getAsBoolean(obj, "foo.x")).toEqual(false);
			expect(getAsBoolean(obj, "foo.x.y")).toEqual(false);
			expect(getAsBoolean(obj, "x")).toEqual(false);

			expect(getAsBoolean(arr, "0.foo.x")).toEqual(false);
			expect(getAsBoolean(arr, "0.foo.x.y")).toEqual(false);
			expect(getAsBoolean(arr, "0.x")).toEqual(false);
			expect(getAsBoolean(arr, "1")).toEqual(false);

			expect(getAsBoolean("abc", "foo")).toEqual(false);
			expect(getAsBoolean(1, "foo")).toEqual(false);
			expect(getAsBoolean(false, "foo")).toEqual(false);
			expect(getAsBoolean(void 0, "foo")).toEqual(false);
			expect(getAsBoolean(null, "foo")).toEqual(false);
		});
	});
});