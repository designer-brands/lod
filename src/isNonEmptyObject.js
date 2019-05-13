module.exports = function isNonEmptyObject (obj) {
    return Boolean(
        (obj instanceof Object) && (!Array.isArray(obj)) && Object.keys(obj).length
    );
};