function getLegalMoves(row, col) {

    const piece = game.board[row][col];

    const moves = [];

    if (piece === "")
        return moves;

    // White Pawn
    if (piece === "P") {

        if (
            row > 0 &&
            game.board[row - 1][col] === ""
        ) {

            moves.push({
                row: row - 1,
                col: col
            });

            if (
                row === 6 &&
                game.board[row - 2][col] === ""
            ) {

                moves.push({
                    row: row - 2,
                    col: col
                });

            }

        }

        if (
            row > 0 &&
            col > 0 &&
            game.board[row - 1][col - 1] !== "" &&
            !isWhite(game.board[row - 1][col - 1])
        ) {

            moves.push({
                row: row - 1,
                col: col - 1
            });

        }

        if (
            row > 0 &&
            col < 7 &&
            game.board[row - 1][col + 1] !== "" &&
            !isWhite(game.board[row - 1][col + 1])
        ) {

            moves.push({
                row: row - 1,
                col: col + 1
            });

        }

    }

    // Black Pawn
    if (piece === "p") {

        if (
            row < 7 &&
            game.board[row + 1][col] === ""
        ) {

            moves.push({
                row: row + 1,
                col: col
            });

            if (
                row === 1 &&
                game.board[row + 2][col] === ""
            ) {

                moves.push({
                    row: row + 2,
                    col: col
                });

            }

        }

        if (
            row < 7 &&
            col > 0 &&
            game.board[row + 1][col - 1] !== "" &&
            isWhite(game.board[row + 1][col - 1])
        ) {

            moves.push({
                row: row + 1,
                col: col - 1
            });

        }

        if (
            row < 7 &&
            col < 7 &&
            game.board[row + 1][col + 1] !== "" &&
            isWhite(game.board[row + 1][col + 1])
        ) {

            moves.push({
                row: row + 1,
                col: col + 1
            });

        }

    }

    return moves;

}
