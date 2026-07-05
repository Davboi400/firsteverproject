const boardElement = document.getElementById("board");
const status = document.getElementById("status");

const pieces = {
    r: "♜",
    n: "♞",
    b: "♝",
    q: "♛",
    k: "♚",
    p: "♟",

    R: "♖",
    N: "♘",
    B: "♗",
    Q: "♕",
    K: "♔",
    P: "♙"
};

function drawBoard() {

    boardElement.innerHTML = "";

    for (let row = 0; row < 8; row++) {

        for (let col = 0; col < 8; col++) {

            const square = document.createElement("div");

            square.className = "square";

            square.classList.add(
                (row + col) % 2 === 0 ? "light" : "dark"
            );

            // Highlight selected piece
            if (
                game.selectedSquare &&
                game.selectedSquare.row === row &&
                game.selectedSquare.col === col
            ) {
                square.classList.add("selected");
            }

            // Highlight legal moves
            const move = game.legalMoves.find(
                m => m.row === row && m.col === col
            );

            if (move) {

                if (game.board[row][col] === "")
                    square.classList.add("legal");
                else
                    square.classList.add("capture");

            }

            square.textContent =
                pieces[game.board[row][col]] || "";

            square.onclick = () => clickSquare(row, col);

            boardElement.appendChild(square);

        }

    }

    status.textContent =
        game.whiteTurn
            ? "White to Move"
            : "Black to Move";

}

function isWhite(piece) {

    if (piece === "") return false;

    return piece === piece.toUpperCase();

}

function clickSquare(row, col) {

    const piece = game.board[row][col];

    // Selecting a piece
    if (!game.selectedSquare) {

        if (piece === "") return;

        if (game.whiteTurn && !isWhite(piece)) return;

        if (!game.whiteTurn && isWhite(piece)) return;

        game.selectedSquare = { row, col };

        game.legalMoves = getLegalMoves(row, col);

        drawBoard();

        return;

    }

    // Deselect the selected piece
    if (
        game.selectedSquare.row === row &&
        game.selectedSquare.col === col
    ) {

        game.selectedSquare = null;
        game.legalMoves = [];

        drawBoard();

        return;

    }

    // Check if the clicked square is a legal move
    const allowed = game.legalMoves.find(
        m => m.row === row && m.col === col
    );

    if (!allowed) {

        game.selectedSquare = null;
        game.legalMoves = [];

        drawBoard();

        return;

    }

    // Make the move
    game.board[row][col] =
        game.board[game.selectedSquare.row][game.selectedSquare.col];

    game.board[game.selectedSquare.row][game.selectedSquare.col] = "";

    game.selectedSquare = null;
    game.legalMoves = [];

    game.whiteTurn = !game.whiteTurn;

    drawBoard();

}
