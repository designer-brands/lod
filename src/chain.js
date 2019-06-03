const defaultToArray = require("./defaultToArray.js");
const defaultToNumber = require("./defaultToNumber.js");
const defaultToObject = require("./defaultToObject.js");
const defaultToString = require("./defaultToString.js");
const get = require("./get.js");
const getAsArray = require("./getAsArray.js");
const getAsBoolean = require("./getAsBoolean.js");
const getAsNumber = require("./getAsNumber.js");
const getAsObject = require("./getAsObject.js");
const getAsString = require("./getAsString.js");
const groupBy = require("./groupBy.js");
const last = require("./last.js");
const pick = require("./pick.js");
const sortBy = require("./sortBy.js");
const uniqBy = require("./uniqBy.js");

const isNullOrUndefined = require("./isNullOrUndefined.js");

/**
 * Creates a {@link lod} wrapper instance that wraps {@link value} to support the chaining mechanism.
 * The result can be accessed by {@link .value()} method. <br/><br/>
 * See the {@tutorial chaining} tutorial for more details.
 * @param {Any} value The value to be wrapped for chaining.
 * @return {Object} The wrapper object for chaining.
 */
function chain (value) {
	let val = value;

	function updateProto (target, source) {
		let newProto = {};

		if (!isNullOrUndefined(source)) {
			let proto = Object.getPrototypeOf(source);

			Object.entries(Object.getOwnPropertyDescriptors(proto)).forEach(([key, descriptor]) => {
				if ("function" === typeof descriptor.value) {
					newProto[key] = function (...args) {
						val = proto[key].call(val, ...args);

						/* eslint-disable no-use-before-define */
						updateProto(result, val);
						return result;
						/* eslint-enable no-use-before-define */
					};
				}
			});
		}

		Object.setPrototypeOf(target, newProto);
	}

	function wrap (fn) {
		return (...args) => {
			val = fn(val, ...args);

			/* eslint-disable no-use-before-define */
			updateProto(result, val);
			return result;
			/* eslint-enable no-use-before-define */
		};
	}

	let result = {
		defaultToArray: wrap(defaultToArray),
		defaultToNumber: wrap(defaultToNumber),
		defaultToObject: wrap(defaultToObject),
		defaultToString: wrap(defaultToString),
		get: wrap(get),
		getAsArray: wrap(getAsArray),
		getAsBoolean: wrap(getAsBoolean),
		getAsNumber: wrap(getAsNumber),
		getAsObject: wrap(getAsObject),
		getAsString: wrap(getAsString),
		groupBy: wrap(groupBy),
		last: wrap(last),
		pick: wrap(pick),
		sortBy: wrap(sortBy),
		uniqBy: wrap(uniqBy),
		invoke: (fn) => {
			val = fn(val);
			return result;
		},
		value: () => val
	};

	updateProto(result, val);
	return result;
}

module.exports = chain;