let counter = 0;

module.exports = function uniqueId (prefix = "") {
    return String(prefix) + (++counter);
};