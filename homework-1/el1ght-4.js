const isPrime = (n) => {
    return n > 0
        ? ![...Array(n).keys()]
        .slice(2)
        .map((i) => !(n % i))
        .includes(true) && ![0, 1].includes(n)
        : false;
};

console.log(isPrime(2));
