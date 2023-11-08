const amountOfMoves = (amountOfDisks) => {
    let moves = 1;
    for (i = 1; i < amountOfDisks; i++) {
        moves = moves * 2 + 1;
    }
    return moves;
};

console.log(amountOfMoves(5));
