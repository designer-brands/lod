const getAsString = require("@src/getAsString.js");

given("getAsString method", function () {
	when("called with a value and a string path", function () {
		let obj, arr;

		beforeEach(function () {
			obj = {
				foo: {
					a: "hello",
					b: false,
					c: [],
					d: {}
				},
				bar: 1
			};

			arr = [{
				foo: {
					a: "hello",
					b: false,
					c: [],
					d: {}
				},
				bar: 1
			}];
		});

		then("it should return the value of the given path if it is an string", function () {
			expect(getAsString(obj, "foo.a")).toEqual("hello");
			expect(getAsString(arr, "0.foo.a")).toEqual("hello");
		});

		then("it should return an empty string if the value of the given path is not an string", function () {
			expect(getAsString(obj, "foo.b")).toEqual("");
			expect(getAsString(obj, "foo.c")).toEqual("");
			expect(getAsString(obj, "foo.d")).toEqual("");
			expect(getAsString(obj, "bar")).toEqual("");
			expect(getAsString(arr, "0.foo.b")).toEqual("");
			expect(getAsString(arr, "0.foo.c")).toEqual("");
			expect(getAsString(arr, "0.foo.d")).toEqual("");
			expect(getAsString(arr, "0.bar")).toEqual("");
			expect(getAsString("abc", "length")).toEqual("");
			expect(getAsString(1, "constructor")).toEqual("");
			expect(getAsString(false, "constructor")).toEqual("");
		});

		then("it should return an empty string if the value of the given path does not exist", function () {
			expect(getAsString(obj, "foo.x")).toEqual("");
			expect(getAsString(obj, "foo.x.y")).toEqual("");
			expect(getAsString(obj, "baz")).toEqual("");
			expect(getAsString(arr, "0.foo.x")).toEqual("");
			expect(getAsString(arr, "0.foo.x.y")).toEqual("");
			expect(getAsString(arr, "0.baz")).toEqual("");
			expect(getAsString("abc", "foo")).toEqual("");
			expect(getAsString(1, "foo")).toEqual("");
			expect(getAsString(false, "foo")).toEqual("");
			expect(getAsString(void 0, "foo")).toEqual("");
			expect(getAsString(null, "foo")).toEqual("");
		});
	});
});