const set = require("../src/set.js");

given("set method", function () {
    when("called with an argument that is not an array or object", function () {
        then("it should return the argument itself", function () {
            let errors = this.checkUndesiredTypes({
                desiredTypes: ["array", "object"],
                fn: set,
                expectedValue: "$self"
            });
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
                    foo: [
                        ,
                        ,
                        {
                            bar: "xyz"
                        }
                    ]
                }
            ]);
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
                foo: [
                    ,
                    {
                        bar: "xyz"
                    }
                ],
                bar: "def"
            });
        });
    });
});