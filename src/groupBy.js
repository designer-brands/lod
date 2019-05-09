module.exports = function groupBy (arr, iteratee = a => a) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.reduce((acc, cur) => {
        let key = iteratee(cur);

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(cur);

        return acc;
    }, {});
};