export default function upperFirst (str) {
    if ("string" !== typeof str) {
        return "";
    }

    return str[0].toUpperCase() + str.slice(1);
}