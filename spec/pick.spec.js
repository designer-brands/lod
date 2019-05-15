const pick = require("../src/pick.js");

given("pick method", function () {
    when("called with a non-object", function () {
        then("it should return an empty object as expected", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["object"],
                fn: pick,
                expectedValue: {}
            });

            expect(errors).toBe("");
        });
    });

    when("called with an empty object and any arbitrary number of paths", function () {
        then("it should return an empty object", function () {
            expect(pick({}, "foo")).toEqual({});
            expect(pick({}, "foo", "bar")).toEqual({});
        });
    });

    when("called with a non empty object and any arbitrary number of paths", function () {
        then("it should return an object with values of given paths if they exist", function () {
            let obj = {
                foo: {
                    bar: [{
                        a: 11,
                        b: 22
                    }, {
                        c: 33
                    }],
                    baz: 44
                },
                x: 55,
                y: {
                    yy: 66
                }
            };

            expect(pick(obj, "foo.bar.1.c", "foo.bar.notExist", "y", "foo.notExist", "notExist", "foo.notExist.bar")).toEqual({
                foo: {
                    // eslint-disable-next-line no-sparse-arrays
                    bar: [, {
                        c: 33
                    }]
                },
                y: {
                    yy: 66
                }
            });
        });
    });
});