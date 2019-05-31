const defaultToObject = require("@src/defaultToObject.js");

given("defaultToObject method", function () {
	when("called with a non-object type", function () {
		then("it should return an empty object as expected", function () {
			let errors = this.checkUndesiredTypes({
				desiredTypes: ["object"],
				fn: defaultToObject,
				expectedValue: {}
			});

			expect(errors).toBe("");
		});
	});

	when("called with an object", function () {
		then("it should return the object itself", function () {
			let obj1 = {};
			expect(defaultToObject(obj1)).toBe(obj1);

			let obj2 = {a: 1};
			expect(defaultToObject(obj2)).toBe(obj2);
		});
	});
});