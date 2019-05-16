const isObject = require("../src/isObject.js");

given("isObject method", function () {
	when("called with a non-object type", function () {
		then("it should return false as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["object"],
				fn: isObject,
				expectedValue: false
			});

			expect(errors).toBe("");
		});
	});

	when("called with an object", function () {
		then("it should return true", function () {
			expect(isObject({})).toBeTruthy();
			expect(isObject({a: 1})).toBeTruthy();
		});
	});
});