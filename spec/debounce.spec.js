const debounce = require("../src/debounce.js");

given("debounce method", function() {
    when("called with a function fn, and the debounced function is called multiple times", function () {
        let debounced;
        let fn;

        beforeEach(function () {
            fn = jasmine.createSpy();
            debounced = debounce(fn);
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        then("the original function should not be called until the last attempt has elapsed more than 100ms", function () {
            debounced();
            debounced();
            debounced();
            expect(fn).not.toHaveBeenCalled();

            setTimeout(debounced, 50);
            jasmine.clock().tick(51);
            expect(fn).not.toHaveBeenCalled();

            setTimeout(debounced, 100);
            jasmine.clock().tick(101);
            expect(fn).toHaveBeenCalled();

            setTimeout(debounced, 100);
            jasmine.clock().tick(101);
            expect(fn.calls.count()).toBe(2);
        });
    });

    when("called with a function and a wait period 500ms", function () {
        let debounced;
        let fn;

        beforeEach(function () {
            fn = jasmine.createSpy();
            debounced = debounce(fn, 500);
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        then("the original function should not be called until the last attempt has elapsed more than 100ms", function () {
            debounced();
            debounced();
            debounced();
            expect(fn).not.toHaveBeenCalled();

            setTimeout(debounced, 200);
            jasmine.clock().tick(201);
            expect(fn).not.toHaveBeenCalled();

            setTimeout(debounced, 500);
            jasmine.clock().tick(501);
            expect(fn).toHaveBeenCalled();

            setTimeout(debounced, 500);
            jasmine.clock().tick(501);
            expect(fn.calls.count()).toBe(2);
        });
    });
});