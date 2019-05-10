/***
 *
 * @param {Object} options
 * @param {String} options.desiredTypes Types that should not be tested by this function.
 * @param {String} options.fn Method function to be tested.
 * @param {String} options.expectedValue Expected value for the undesired types.
 * 
 */
/* istanbul ignore next */
beforeAll(function () {
    this.checkUndesiredTypes = function checkUndesiredTypes (options) {
        const types = {
            "number": [0, 1],
            "string": ["a", "ab"],
            "boolean": [true, false],
            "object": [{}, {a: 1}],
            "array": [[], [1]],
            "undefined": [undefined],
            "null": [null],
            // "regex",
            // "function",
            // "set",
            // "map",
            // "weakSet",
            // "weakMap",
            // "symbol"
        };

        let errors = {};

        // loop through all types
        Object.entries(types).forEach(([type, values] = entry) => {

            // only care about undesired types
            if (!options.desiredTypes.includes(type)) {

                // for each undesired type, loop through its values array
                values.forEach(value => {

                    // run function with value in array and check its return
                    if (options.fn(value) !== options.expectedValue) {

                        if (!errors[type]) {
                            errors[type] = [];
                        }

                        // if return is different from expected value, store in errors object
                        errors[type].push(value);
                    }
                });
            }
        });

        // no error
        if (0 === Object.keys(errors).length) {
            return false;
        // has error
        } else {
            return "these values of undesired types have errors: " + Json.stringify(result);
        }
    };
});