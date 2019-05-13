const upperFirst = require("../src/upperFirst.js");

given("upperFirst method", function() {
    when("it is called with non-string types", function () {
        then("it should return an empty string as expected", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["string"],
                fn: upperFirst,
                expectedValue: ""
            });

            expect(errors).toBe("");
        });
    });

    when("it is called with string", function () {
        then("it should return a new string with first letter turned to uppercase", function () {
            expect(upperFirst("")).toBe("");
            expect(upperFirst("a")).toBe("A");
            expect(upperFirst("ab")).toBe("Ab");
            expect(upperFirst("ABC")).toBe("ABC");
            expect(upperFirst("aBC")).toBe("ABC");
        });
    });
});