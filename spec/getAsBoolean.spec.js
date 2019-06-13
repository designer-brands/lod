const getAsBoolean = require("@src/getAsBoolean.js");

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
			expect(getAsBoolean(obj, "foo.a")).toBe(false);
			expect(getAsBoolean(obj, "foo.b")).toBe(true);
			expect(getAsBoolean(arr, "0.foo.a")).toBe(false);
			expect(getAsBoolean(arr, "0.foo.b")).toBe(true);
		});

		then("it should convert the value of the given path if it is not a boolean", function () {
			expect(getAsBoolean(obj, "foo.c")).toBe(true);
			expect(getAsBoolean(obj, "foo.d")).toBe(false);
			expect(getAsBoolean(obj, "foo.e")).toBe(false);
			expect(getAsBoolean(obj, "foo.f")).toBe(true);
			expect(getAsBoolean(obj, "bar")).toBe(true);
			expect(getAsBoolean(obj, "baz")).toBe(true);

			expect(getAsBoolean(arr, "0.foo.c")).toBe(true);
			expect(getAsBoolean(arr, "0.foo.d")).toBe(false);
			expect(getAsBoolean(arr, "0.foo.e")).toBe(false);
			expect(getAsBoolean(arr, "0.foo.f")).toBe(true);
			expect(getAsBoolean(arr, "0.bar")).toBe(true);
			expect(getAsBoolean(arr, "0.baz")).toBe(true);

			expect(getAsBoolean("abc", "length")).toBe(true);
			expect(getAsBoolean(1, "constructor")).toBe(true);
			expect(getAsBoolean(false, "constructor")).toBe(true);
		});

		then("it should return false if the value of the given path does not exist", function () {
			expect(getAsBoolean(obj, "foo.x")).toBe(false);
			expect(getAsBoolean(obj, "foo.x.y")).toBe(false);
			expect(getAsBoolean(obj, "x")).toBe(false);

			expect(getAsBoolean(arr, "0.foo.x")).toBe(false);
			expect(getAsBoolean(arr, "0.foo.x.y")).toBe(false);
			expect(getAsBoolean(arr, "0.x")).toBe(false);
			expect(getAsBoolean(arr, "1")).toBe(false);

			expect(getAsBoolean("abc", "foo")).toBe(false);
			expect(getAsBoolean(1, "foo")).toBe(false);
			expect(getAsBoolean(false, "foo")).toBe(false);
			expect(getAsBoolean(void 0, "foo")).toBe(false);
			expect(getAsBoolean(null, "foo")).toBe(false);
		});
	});
});