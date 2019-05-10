const upperFirst = require("../src/upperFirst.js");
const checkUndesiredTypes = require("./helpers/checkUndesiredTypes.js");

describe("upperFirst", function() {
    describe("called with non-string types", function () {
        checkUndesiredTypes({
            desiredTypes: ["string"],
            fn: upperFirst,
            expectedValue: ""
        });
    });
    
    describe("called with string", function () {
        it("should return a new string with first letter turned to uppercase", function () {
            expect(upperFirst("")).toBe("");
            expect(upperFirst("a")).toBe("A");
            expect(upperFirst("ab")).toBe("Ab");
            expect(upperFirst("ABC")).toBe("ABC");
            expect(upperFirst("aBC")).toBe("ABC");
        });
    });
});