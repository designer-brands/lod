module.exports = function upperFirst (str) {
    if ("string" !== typeof str) {
        return "";
    }

    return str.slice(0, 1).toUpperCase() + str.slice(1);
};