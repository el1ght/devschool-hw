function landPerimeter(arr) {
    let count = 0;
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[0].length; x++) {
            if (arr[y][x] === "X") {
                if (y === 0 || arr[y - 1][x] !== "X") count++;
                if (y === arr.length - 1 || arr[y + 1][x] !== "X") count++;
                if (x === 0 || arr[y][x - 1] !== "X") count++;
                if (x === arr[0].length - 1 || arr[y][x + 1] !== "X") count++;
            }
        }
    }
    return "Total land perimeter: " + count;
}
