const isNullOrUndefined = require("../src/isNullOrUndefined.js");

describe("isNullOrUndefined", function() {
    describe("called with neither null nor undefined", function () {
        it("should return false", function () {
            expect(isNullOrUndefined(1)).toBe(false);
            expect(isNullOrUndefined("a")).toBe(false);
            expect(isNullOrUndefined(true)).toBe(false);
            expect(isNullOrUndefined(false)).toBe(false);
            expect(isNullOrUndefined([])).toBe(false);
            expect(isNullOrUndefined({})).toBe(false);
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