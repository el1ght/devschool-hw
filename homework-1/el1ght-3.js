function findNb(m) {
    let counter = 0;
    let sum = 0;
    while (sum < m) {
        counter++;
        sum += Math.pow(counter, 3);
    }
    return sum === m ? counter : -1;
}

console.log(findNb(9171655319377));
