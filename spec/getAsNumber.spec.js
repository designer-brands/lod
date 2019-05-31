const getAsNumber = require("@src/getAsNumber.js");

given("getAsNumber method", function () {
	when("called with a value and a number path", function () {
		let obj, arr;

		beforeEach(function () {
			obj = {
				foo: {
					a: 1,
					b: false,
					c: [],
					d: {}
				},
				bar: "hello"
			};

			arr = [{
				foo: {
					a: 1,
					b: false,
					c: [],
					d: {}
				},
				bar: "hello"
			}];
		});

		then("it should return the value of the given path if it is an number", function () {
			expect(getAsNumber(obj, "foo.a")).toEqual(1);
			expect(getAsNumber(arr, "0.foo.a")).toEqual(1);
			expect(getAsNumber("abc", "length")).toEqual(3);
			expect(getAsNumber("", "length")).toEqual(0);
			expect(getAsNumber(new Set(), "size")).toEqual(0);
			expect(getAsNumber(new Map(), "size")).toEqual(0);
		});

		then("it should return 0 if the value of the given path is not an number", function () {
			expect(getAsNumber(obj, "foo.b")).toEqual(0);
			expect(getAsNumber(obj, "foo.c")).toEqual(0);
			expect(getAsNumber(obj, "foo.d")).toEqual(0);
			expect(getAsNumber(obj, "bar")).toEqual(0);
			expect(getAsNumber(arr, "0.foo.b")).toEqual(0);
			expect(getAsNumber(arr, "0.foo.c")).toEqual(0);
			expect(getAsNumber(arr, "0.foo.d")).toEqual(0);
			expect(getAsNumber(arr, "0.bar")).toEqual(0);
			expect(getAsNumber(1, "constructor")).toEqual(0);
			expect(getAsNumber(false, "constructor")).toEqual(0);
		});

		then("it should return 0 if the value of the given path does not exist", function () {
			expect(getAsNumber(obj, "foo.x")).toEqual(0);
			expect(getAsNumber(obj, "foo.x.y")).toEqual(0);
			expect(getAsNumber(obj, "baz")).toEqual(0);
			expect(getAsNumber(arr, "0.foo.x")).toEqual(0);
			expect(getAsNumber(arr, "0.foo.x.y")).toEqual(0);
			expect(getAsNumber(arr, "0.baz")).toEqual(0);
			expect(getAsNumber("abc", "foo")).toEqual(0);
			expect(getAsNumber(1, "foo")).toEqual(0);
			expect(getAsNumber(false, "foo")).toEqual(0);
			expect(getAsNumber(void 0, "foo")).toEqual(0);
			expect(getAsNumber(null, "foo")).toEqual(0);
		});
	});
});