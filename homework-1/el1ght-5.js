const highAndLow = (s) => [
    Math.min(...s.split(" ").map((n) => +n)),
    Math.max(...s.split(" ").map((n) => +n)),
];

console.log(highAndLow("1 9 3 4 -5"));
