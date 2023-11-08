const sum = (max) => {
    let result = 0;
    for (i = 1; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return max ? result : 0;
};

console.log(sum(-33));
