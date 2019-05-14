const range = require("../src/range.js");

given("range method", function () {
    when("called with non-numerical arguments", function () {
        then("it should return an empty array as expected", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["number"],
                fn: range,
                expectedValue: []
            });

            expect(errors).toBe("");
        });
    });

    when("called with a NaN or Infinity", function () {
        then("it should return an empty array", function () {
            expect(range(NaN)).toEqual([]);
            expect(range(Infinity)).toEqual([]);
            expect(range(-Infinity)).toEqual([]);
        });
    });

    when("called with one numerical argument", function () {
        when("and the argument is greater than 0", function () {
            then("it should default start to 0 and step to 1", function () {
                expect(range(2)).toEqual([0, 1, 2]);
                expect(range(2.1)).toEqual([0, 1, 2]);
            });
        });

        when("and the argument is less than 0", function () {
            then("it should default start to 0 and step to -1", function () {
                expect(range(-2)).toEqual([0, -1, -2]);
                expect(range(-2.1)).toEqual([0, -1, -2]);
            });
        });

        when("and the argument equals 0", function () {
            then("it should default an array with only one element as 0", function () {
                expect(range(0)).toEqual([0]);
            });
        });
    });

    when("called with two numerical arguments", function () {
        when("and the first argument is greater than the second", function () {
            then("it should default step to 1", function () {
                expect(range(2, 5)).toEqual([2, 3, 4, 5]);
                expect(range(2, 5.1)).toEqual([2, 3, 4, 5]);
                expect(range(2.1, 5)).toEqual([2.1, 3.1, 4.1]);
                expect(range(-5, -2)).toEqual([-5, -4, -3, -2]);
                expect(range(-5.1, -2)).toEqual([-5.1, -4.1, -3.1, -2.1]);
                expect(range(-5, -2.1)).toEqual([-5, -4, -3]);
            });
        });

        when("and the first argument is less than the second", function () {
            then("it should default step to -1", function () {
                expect(range(5, 2)).toEqual([5, 4, 3, 2]);
                expect(range(5.1, 2)).toEqual([5.1, 4.1, 3.1, 2.1]);
                expect(range(5, 2.1)).toEqual([5, 4, 3]);
                expect(range(-2, -5)).toEqual([-2, -3, -4, -5]);
                expect(range(-2, -5.1)).toEqual([-2, -3, -4, -5]);
                expect(range(-2.1, -5)).toEqual([-2.1, -3.1, -4.1]);
            });
        });

        when("and the first argument equals the second", function () {
            then("it should default an array with only one element", function () {
                expect(range(2, 2)).toEqual([2]);
                expect(range(-2, -2)).toEqual([-2]);
            });
        });
    });

    when("called with three numerical arguments", function () {
        when("and the start is less than the end but step is negative", function () {
            then("it should return an emmpty array", function () {
                expect(range(2, 5, -2)).toEqual([]);
            });
        });

        when("and the start is greater than the end but step is positive", function () {
            then("it should return an emmpty array", function () {
                expect(range(5, 2, 2)).toEqual([]);
            });
        });

        when("and the start and end are equal", function () {
            then("it should return an array with only one element regardless of the step", function () {
                expect(range(5, 5, 2)).toEqual([5]);
                expect(range(5, 5, 0)).toEqual([5]);
                expect(range(5, 5, -2)).toEqual([5]);
            });
        });

        when("and the start and end are not equal and step is 0", function () {
            then("it should return an empty array", function () {
                expect(range(5, 2, 0)).toEqual([]);
            });
        });

        when("and the start is less than end, and step is positive", function () {
            then("it should return an array as expected", function () {
                expect(range(2, 7, 2)).toEqual([2, 4, 6]);
                expect(range(-7, -2, 2)).toEqual([-7, -5, -3]);
            });
        });

        when("and the start is greater than end, and step is negative", function () {
            then("it should return an array as expected", function () {
                expect(range(7, 2, -2)).toEqual([7, 5, 3]);
                expect(range(-2, -7, -2)).toEqual([-2, -4, -6]);
            });
        });
    });
});