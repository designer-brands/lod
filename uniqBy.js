module.exports = function uniqBy (arr, iteratee = a => a) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.reduce((acc, cur) => {
        let mapped = iteratee(cur);

        if (!acc.includes[mapped]) {
            acc.push(mapped);
        }

        return acc;
    }, []);
};