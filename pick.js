import get from "./get.js";
import isNonEmptyObject from "./isNonEmptyObject.js";

export default function pick (obj, ...paths) {
    if (!isNonEmptyObject(obj)) {
        return {};
    }

    let result = {};

    paths.forEach(path => {
        if (obj.hasOwnProperty(path)) {
            result[path] = get(obj, path);
        }
    });

    return result;
}