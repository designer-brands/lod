const get = require("../src/get.js");

given("get method", function() {
    when("called with null or undefined as the first argument and a path", function () {
        then("it should return undefined", function () {
            expect(get(null, "some path")).toBe(void 0);
            expect(get(void 0, "some path")).toBe(void 0);
        });
    });

    when("called with null or undefined as the first argument, and a path and a default value", function () {
        then("it should return the default value", function () {
            expect(get(null, "some path", "default value")).toBe("default value");
            expect(get(void 0, "some path", "default value")).toBe("default value");
        });
    });

    when("called with an array and an index", function () {
        then("it should return the element at the given index if it exists", function () {
            expect(get([1, 2], 1)).toBe(2);
        });

        then("it should return undefined if it doesn't exists", function () {
            expect(get([1, 2], 2)).toBe(void 0);
        });
    });

    when("called with an array, an index and a default value", function () {
        then("it should return the element at the given index if it exists", function () {
            expect(get([1, 2], 1, "default value")).toBe(2);
        });

        then("it should return the default value if it doesn't exists", function () {
            expect(get([1, 2], 2, "default value")).toBe("default value");
        });
    });

    when("called with a string and an index", function () {
        then("it should return the char at the given index if it exists", function () {
            expect(get("abc", 1)).toBe("b");
        });

        then("it should return undefined if it doesn't exists", function () {
            expect(get("a", 1)).toBe(void 0);
        });
    });

    when("called with a string, an index and a default value", function () {
        then("it should return the char at the given index if it exists", function () {
            expect(get("abc", 1, "default value")).toBe("b");
        });

        then("it should return the default value if it doesn't exists", function () {
            expect(get("a", 1, "default value")).toBe("default value");
        });
    });

    when("called with a string and a string property", function () {
        then("it should return the value of the given property if it exists", function () {
            expect(get("abc", "length")).toBe(3);
        });

        then("it should return undefined if the given property doesn't exist", function () {
            expect(get("abc", "foo")).toBe(void 0);
        });
    });

    when("called with a string, a string property, and a default value", function () {
        then("it should return the value of the given property if it exists", function () {
            expect(get("abc", "length", "default value")).toBe(3);
        });

        then("it should return the default value if the given property doesn't exist", function () {
            expect(get("abc", "foo", "default value")).toBe("default value");
        });
    });

    when("called with an object and a string path", function () {
        let obj;

        beforeEach(function () {
            obj = {
                foo: {
                    bar: [{
                        a: 11,
                        b: 22
                    }, {
                        a: 33
                    }]
                },
                baz: 123
            };
        });

        then("it should return the value of the given path if it exists", function () {
            expect(get(obj, "foo")).toEqual({
                bar: [{
                    a: 11,
                    b: 22
                }, {
                    a: 33
                }]
            });

            expect(get(obj, "baz")).toBe(123);

            expect(get(obj, "foo.bar")).toEqual([{
                a: 11,
                b: 22
            }, {
                a: 33
            }]);

            expect(get(obj, "foo.bar.1")).toEqual({
                a: 33
            });

            expect(get(obj, "foo.bar.1.a")).toBe(33);
        });

        then("it should return undefined if the value of the given path doesn't exist", function () {
            expect(get(obj, "x")).toEqual(void 0);
            expect(get(obj, "baz.x")).toBe(void 0);
            expect(get(obj, "foo.bar.x")).toEqual(void 0);
            expect(get(obj, "foo.bar.x.y")).toEqual(void 0);
        });
    });

    when("called with an object, a string path and a default value", function () {
        let obj;

        beforeEach(function () {
            obj = {
                foo: {
                    bar: [{
                        a: 11,
                        b: 22
                    }, {
                        a: 33
                    }]
                },
                baz: 123
            };
        });

        then("it should return the value of the given path if it exists", function () {
            expect(get(obj, "foo", "default value")).toEqual({
                bar: [{
                    a: 11,
                    b: 22
                }, {
                    a: 33
                }]
            });

            expect(get(obj, "baz", "default value")).toBe(123);

            expect(get(obj, "foo.bar", "default value")).toEqual([{
                a: 11,
                b: 22
            }, {
                a: 33
            }]);

            expect(get(obj, "foo.bar.1", "default value")).toEqual({
                a: 33
            });

            expect(get(obj, "foo.bar.1.a", "default value")).toBe(33);
        });

        then("it should return the default value if the value of the given path doesn't exist", function () {
            expect(get(obj, "x", "default value")).toEqual("default value");
            expect(get(obj, "baz.x", "default value")).toBe("default value");
            expect(get(obj, "foo.bar.x", "default value")).toEqual("default value");
            expect(get(obj, "foo.bar.x.y", "default value")).toEqual("default value");
        });
    });

    when("called with an array and a string path", function () {
        let arr;

        beforeEach(function () {
            arr = [{
                foo: {
                    bar: [1, 2]
                }
            }]
        });

        then("it should return the value of the given path if it exists", function () {
            expect(get(arr, "0.foo.bar")).toEqual([1, 2]);
            expect(get(arr, "0.foo.bar.1")).toBe(2);
        });

        then("it should return undefined if the value of the given path doesn't exist", function () {
            expect(get(arr, "1")).toEqual(void 0);
            expect(get(arr, "0.x")).toEqual(void 0);
            expect(get(arr, "0.x.y")).toEqual(void 0);
            expect(get(arr, "0.foo.x")).toBe(void 0);
        });
    });

    when("called with an array, a string path and a default value", function () {
        let arr;

        beforeEach(function () {
            arr = [{
                foo: {
                    bar: [1, 2]
                }
            }]
        });

        then("it should return the value of the given path if it exists", function () {
            expect(get(arr, "0.foo.bar", "default value")).toEqual([1, 2]);
            expect(get(arr, "0.foo.bar.1", "default value")).toBe(2);
        });

        then("it should return the default value if the value of the given path doesn't exist", function () {
            expect(get(arr, "1", "default value")).toEqual("default value");
            expect(get(arr, "0.x", "default value")).toEqual("default value");
            expect(get(arr, "0.x.y", "default value")).toEqual("default value");
            expect(get(arr, "0.foo.x", "default value")).toBe("default value");
        });
    });
});