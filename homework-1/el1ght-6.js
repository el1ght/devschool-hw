function descendingOrder(n) {
    let length = n.toString().length;
    let userString = n.toString();
    let changed = true;
    while (changed) {
        changed = false;
        for (i = 0; i < length - 1; i++) {
            if (userString[i] < userString[i + 1]) {
                userString =
                    userString.substring(0, i) +
                    userString[i + 1] +
                    userString[i] +
                    userString.substring(i + 2, length);
                changed = true;
            }
        }
    }
    return parseInt(userString);
}

console.log(descendingOrder(12345));
