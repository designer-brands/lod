module.exports = function isNonEmptyObject (obj) {
    return (obj instanceof Object) && (!Array.isArray(obj)) && Object.keys(obj).length;
};