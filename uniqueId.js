let counter = 0;

export default function uniqueId (prefix = "") {
    return String(prefix) + (++counter);
}