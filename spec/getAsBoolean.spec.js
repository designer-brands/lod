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
			expect(getAsBoolean(obj, "foo.a")).toBeFalsy();
			expect(getAsBoolean(obj, "foo.b")).toBeTruthy();
			expect(getAsBoolean(arr, "0.foo.a")).toBeFalsy();
			expect(getAsBoolean(arr, "0.foo.b")).toBeTruthy();
		});

		then("it should convert the value of the given path if it is not a boolean", function () {
			expect(getAsBoolean(obj, "foo.c")).toBeTruthy();
			expect(getAsBoolean(obj, "foo.d")).toBeFalsy();
			expect(getAsBoolean(obj, "foo.e")).toBeFalsy();
			expect(getAsBoolean(obj, "foo.f")).toBeTruthy();
			expect(getAsBoolean(obj, "bar")).toBeTruthy();
			expect(getAsBoolean(obj, "baz")).toBeTruthy();

			expect(getAsBoolean(arr, "0.foo.c")).toBeTruthy();
			expect(getAsBoolean(arr, "0.foo.d")).toBeFalsy();
			expect(getAsBoolean(arr, "0.foo.e")).toBeFalsy();
			expect(getAsBoolean(arr, "0.foo.f")).toBeTruthy();
			expect(getAsBoolean(arr, "0.bar")).toBeTruthy();
			expect(getAsBoolean(arr, "0.baz")).toBeTruthy();

			expect(getAsBoolean("abc", "length")).toBeTruthy();
			expect(getAsBoolean(1, "constructor")).toBeTruthy();
			expect(getAsBoolean(false, "constructor")).toBeTruthy();
		});

		then("it should return false if the value of the given path does not exist", function () {
			expect(getAsBoolean(obj, "foo.x")).toBeFalsy();
			expect(getAsBoolean(obj, "foo.x.y")).toBeFalsy();
			expect(getAsBoolean(obj, "x")).toBeFalsy();

			expect(getAsBoolean(arr, "0.foo.x")).toBeFalsy();
			expect(getAsBoolean(arr, "0.foo.x.y")).toBeFalsy();
			expect(getAsBoolean(arr, "0.x")).toBeFalsy();
			expect(getAsBoolean(arr, "1")).toBeFalsy();

			expect(getAsBoolean("abc", "foo")).toBeFalsy();
			expect(getAsBoolean(1, "foo")).toBeFalsy();
			expect(getAsBoolean(false, "foo")).toBeFalsy();
			expect(getAsBoolean(void 0, "foo")).toBeFalsy();
			expect(getAsBoolean(null, "foo")).toBeFalsy();
		});
	});
});