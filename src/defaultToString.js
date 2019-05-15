module.exports = function defaultToString (value) {
    return "string" === typeof value ? value : "";
};