const set = require("../src/set.js");

given("set method", function () {
    when("called with an argument that is not an array or object", function () {
        then("it should return the argument itself", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["array", "object"],
                fn: set,
                expectedValue: "$self"
            });

            expect(errors).toBe("");
        });
    });

    when("called with an array, an index and a value", function () {
        then("it should set the value at the given index in the array and return the array", function () {
            let arr = [];
            expect(set(arr, 1, "foo")).toBe(arr);
            expect(arr[1]).toBe("foo");
        });
    });

    when("called with an array, a string path and a value", function () {
        then("it should set the value according to the given path in the array and return the array", function () {
            let arr = ["abc", "def"];
            expect(set(arr, "1.foo.2.bar", "xyz")).toBe(arr);
            expect(arr).toEqual([
                "abc",
                {
                    // eslint-disable-next-line no-sparse-arrays
                    foo: [,,
                        {
                            bar: "xyz"
                        }
                    ]
                }
            ]);

            let arr2 = [{
                a: 1
            }, {
                a: 2
            }];

            expect(set(arr2, "1.a", 3)).toBe(arr2);
            expect(arr2).toEqual([{
                a: 1
            }, {
                a: 3
            }]);
        });
    });

    when("called with an object, a string path and a value", function () {
        then("it should set the value according to the given path in the object and return the object", function () {
            let obj = {
                foo: "abc",
                bar: "def"
            };

            expect(set(obj, "foo.1.bar", "xyz")).toBe(obj);
            expect(obj).toEqual({
                // eslint-disable-next-line no-sparse-arrays
                foo: [,
                    {
                        bar: "xyz"
                    }
                ],
                bar: "def"
            });

            let obj2 = {
                foo: {
                    bar: 1
                }
            };

            expect(set(obj2, "foo.bar", 2)).toBe(obj2);
            expect(obj2).toEqual({
                foo: {
                    bar: 2
                }
            });
        });
    });
});