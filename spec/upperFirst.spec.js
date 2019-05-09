const upperFirst = require("../src/upperFirst.js");

describe("upperFirst", function() {
    describe("called with non-string", function () {
        it("should return emtpy string", function () {
            expect(upperFirst()).toBe("");
            expect(upperFirst(undefined)).toBe("");
            expect(upperFirst(null)).toBe("");
            expect(upperFirst(true)).toBe("");
            expect(upperFirst(0)).toBe("");
            expect(upperFirst(1)).toBe("");
            expect(upperFirst([])).toBe("");
            expect(upperFirst({})).toBe("");
        })
    })
    
    describe("called with string", function () {
        it("should return a new string with first letter change to uppercase", function () {
            expect(upperFirst("")).toBe("");
            expect(upperFirst("a")).toBe("A");
            expect(upperFirst("ab")).toBe("Ab");
            expect(upperFirst("ABC")).toBe("ABC");
            expect(upperFirst("aBC")).toBe("ABC");
        })
    })
})