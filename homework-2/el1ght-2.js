function findEvenIndex(arr) {
    let result = -1;
    for (i = 0; i < arr.length; i++) {
        let first = arr.slice(0, i);
        let second = arr.slice(i + 1);
        if (
            first.reduce((acc, cur) => acc + cur, 0) ===
            second.reduce((acc, cur) => acc + cur, 0)
        ) {
            result = i;
            break;
        }
    }
    return result;
}
