/**
 * Generate an array of numbers with in the specified range. <br/><br/>
 * If only 1 argument is passed in, it will be used as {@link end}, {@link start} will be
 * defaulted to 0 and {@link step} will be defaulted to 1 or -1 whichever makes sense. <br/><br/>
 * If only 2 arguments are passed in, they will be used as {@link start} and {@link end}, and
 * {@link step} will be defaulted to 1 or -1 whichever makes sense.
 * @param {Number=} [start=0] - The start point of the range.
 * @param {Number} end - The end point of the range.
 * @param {Number=} [step=1 | -1] - The step of the range.
 * @returns {Array} An array of numbers within the specified range.
 * @example
 * range(3); // [0, 1, 2, 3]
 * range(-3); // [0, -1, -2, -3]
 * range(1, 3); // [1, 2, 3]
 * range(1, -3); // [1, 0, -1, -2, -3]
 * range(1, 4, 2); // [1, 3]
 * range(1, -4, 2); // [1, -1, -3]
*/

function range (start, end, step) {
	let args = [...arguments];

	// every arg must be a finite number
	let isEveryArgFinite = args.every(
		arg => ("number" === typeof arg) && isFinite(arg)
	);

	if (!isEveryArgFinite) {
		return [];
	}

	// normalize args
	switch (args.length) {
		// if 1 arg, imply it's end, start = 0 and step is 1 or -1
		case 1:
			start = 0;
			end = args[0];
			step = (start <= end ? 1 : -1);
			break;
			// if 2 args, imply they're start and end, and step is 1 or -1
		case 2:
			step = (start <= end ? 1 : -1);
			break;
	}

	// in case passing in all 3 args but step has a wrong sign
	if (start < end && step < 0 || start > end && step > 0) {
		return [];
	}

	if (start === end) {
		return [start];
	}

	if (step === 0) {
		return [];
	}

	let result = [];
	for (
		let n = start;
		(start < end && n <= end) || (start > end && n >= end);
		n += step
	) {

		result.push(Number(n.toFixed(2)));
	}

	return result;
}

module.exports = range;