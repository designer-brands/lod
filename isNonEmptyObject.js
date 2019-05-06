import isNullOrUndefined from "./isNullOrUndefined.js";

export default function isNonEmptyObject (obj) {
    return (obj instanceof Object) && Object.keys(obj).length;
}