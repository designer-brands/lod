const index = require("../src/index.js");

given("index file", function () {
	then("it should have 22 methods exposed", function () {
		expect(Object.keys(index).length).toBe(22);

		Object.values(val => {
			expect(val).toEqual(jasmine.any(Function));
		});
	});
});