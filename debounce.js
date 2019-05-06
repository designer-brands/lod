export default function debounce (fn, wait) {
    if (typeof wait !== "number" || !isFinite(wait)) {
        wait = 100;
    }

    let timeout;

    return function debounced () {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimetout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, wait, ...arguments);
    }
}