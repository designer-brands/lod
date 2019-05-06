module.exports = function uniqBy (arr, iteratee = val => val) {
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