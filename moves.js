function getLegalMoves(row, col) {

    const piece = game.board[row][col];

    if (piece === "") return [];

    switch (piece.toLowerCase()) {

        case "p":
            return getPawnMoves(row, col);

        case "n":
            return getKnightMoves(row, col);

        default:
            return [];

    }

}

function getPawnMoves(row, col) {

    const piece = game.board[row][col];

    const moves = [];

    if (piece === "P") {

        if (
            row > 0 &&
            game.board[row - 1][col] === ""
        ) {

            moves.push({ row: row - 1, col });

            if (
                row === 6 &&
                game.board[row - 2][col] === ""
            ) {

                moves.push({ row: row - 2, col });

            }

        }

        if (
            row > 0 &&
            col > 0 &&
            game.board[row - 1][col - 1] !== "" &&
            !isWhite(game.board[row - 1][col - 1])
        ) {

            moves.push({ row: row - 1, col: col - 1 });

        }

        if (
            row > 0 &&
            col < 7 &&
            game.board[row - 1][col + 1] !== "" &&
            !isWhite(game.board[row - 1][col + 1])
        ) {

            moves.push({ row: row - 1, col: col + 1 });

        }

    }

    if (piece === "p") {

        if (
            row < 7 &&
            game.board[row + 1][col] === ""
        ) {

            moves.push({ row: row + 1, col });

            if (
                row === 1 &&
                game.board[row + 2][col] === ""
            ) {

                moves.push({ row: row + 2, col });

            }

        }

        if (
            row < 7 &&
            col > 0 &&
            game.board[row + 1][col - 1] !== "" &&
            isWhite(game.board[row + 1][col - 1])
        ) {

            moves.push({ row: row + 1, col: col - 1 });

        }

        if (
            row < 7 &&
            col < 7 &&
            game.board[row + 1][col + 1] !== "" &&
            isWhite(game.board[row + 1][col + 1])
        ) {

            moves.push({ row: row + 1, col: col + 1 });

        }

    }

    return moves;

}

function getKnightMoves(row, col) {

    const piece = game.board[row][col];

    const moves = [];

    const offsets = [

        [-2, -1],
        [-2,  1],

        [-1, -2],
        [-1,  2],

        [ 1, -2],
        [ 1,  2],

        [ 2, -1],
        [ 2,  1]

    ];

    for (const [dr, dc] of offsets) {

        const newRow = row + dr;
        const newCol = col + dc;

        // Stay on the board
        if (
            newRow < 0 ||
            newRow > 7 ||
            newCol < 0 ||
            newCol > 7
        ) {
            continue;
        }

        const target = game.board[newRow][newCol];

        // Empty square
        if (target === "") {

            moves.push({
                row: newRow,
                col: newCol
            });

            continue;

        }

        // Capture enemy piece
        if (isWhite(piece) !== isWhite(target)) {

            moves.push({
                row: newRow,
                col: newCol
            });

        }

    }

    return moves;

}
