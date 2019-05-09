/***
 *
 * @param {Object} options
 * @param {String} options.desiredTypes Types that should not be tested by this function.
 * @param {String} options.fn Method function to be tested.
 * @param {String} options.expectedValue Expected value for the undesired types.
 * 
 */
module.exports = function checkUndesiredTypes (options) {
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

    Object.entries(types).forEach(([type, values] = entry) => {
        if (!options.desiredTypes.includes(type)) {
            values.forEach(value => {
                describe(`when argument is ${value}`, function () {
                    it(`should return ${options.expectedValue}`, function () {
                        expect(options.fn(value)).toEqual(options.expectedValue);
                    });
                });
            });
        }
    })
};