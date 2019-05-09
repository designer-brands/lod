const isNullOrUndefined = require("../src/isNullOrUndefined.js");
const checkUndesiredTypes = require("./helpers/checkUndesiredTypes.js");

describe("isNullOrUndefined", function() {
    describe("called with neither null nor undefined", function () {
        checkUndesiredTypes({
            desiredTypes: ["null", "undefined"],
            fn: isNullOrUndefined,
            expectedValue: false
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