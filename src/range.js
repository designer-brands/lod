module.exports = function range (start, end, step) {
    // every arg must be a finite number
    let isEveryArgFinite = [...arguments].every(
        arg => ("number" === typeof arg) && isFinite(arg)
    );

    if (!isEveryArgFinite) {
        return [];
    }

    // normalize args
    switch(arguments.length) {
        // if 1 arg, imply it's end, start = 0 and step is 1 or -1
        case 1:
            start = 0;
            end = arguments[0];
            step = (start <= end ? 1 : -1);
            break;
        // if 2 args, imply they're start and end, and step is 1 or -1
        case 2:
            step = (start <= end ? 1 : -1);
            break;
    }

    // in case passing in all 3 args but step has a wrong sign
    if (start <= end && step <= 0 || start >= end && step >= 0) {
        return [];
    }

    let result = [];
    for (let n = start; n <= end; n += step) {
        result.push(n);
    }

    return result;
};