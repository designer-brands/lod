const index = require("../src/index.js");

given("index file", function () {
	then("it should have 23 methods exposed", function () {
		expect(Object.keys(index).length).toBe(23);

		Object.values(val => {
			expect(val).toEqual(jasmine.any(Function));
		});
	});
});