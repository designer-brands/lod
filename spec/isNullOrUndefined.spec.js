const isNullOrUndefined = require("../src/isNullOrUndefined.js");

describe("isNullOrUndefined", function() {
    describe("called with neither null nor undefined", function () {
        it("should have no errors", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["null", "undefined"],
                fn: isNullOrUndefined,
                expectedValue: false
            });

            expect(errors).toBe(false);
        });
    });
    
    describe("called with null", function () {
        it("should return true", function () {
            expect(isNullOrUndefined(null)).toBe(true);
        });
    });

    describe("called with undefined", function () {
        it("should return true", function () {
            expect(isNullOrUndefined(void 0)).toBe(true);
        });
    });
})