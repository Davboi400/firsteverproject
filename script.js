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

let board;
let whiteTurn;
let selectedSquare;
let legalMoves;

function startGame() {

    board = [
        ["r","n","b","q","k","b","n","r"],
        ["p","p","p","p","p","p","p","p"],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["P","P","P","P","P","P","P","P"],
        ["R","N","B","Q","K","B","N","R"]
    ];

    whiteTurn = true;
    selectedSquare = null;
    legalMoves = [];

    drawBoard();
}

function drawBoard() {

    boardElement.innerHTML = "";

    for (let row = 0; row < 8; row++) {

        for (let col = 0; col < 8; col++) {

            const square = document.createElement("div");

            square.className = "square";

            if ((row + col) % 2 === 0)
                square.classList.add("light");
            else
                square.classList.add("dark");

            if (
                selectedSquare &&
                selectedSquare.row === row &&
                selectedSquare.col === col
            ) {
                square.classList.add("selected");
            }

            const move = legalMoves.find(m => m.row === row && m.col === col);

            if (move) {

                if (board[row][col] === "")
                    square.classList.add("legal");
                else
                    square.classList.add("capture");

            }

            square.textContent = pieces[board[row][col]] || "";

            square.onclick = () => clickSquare(row, col);

            boardElement.appendChild(square);

        }

    }

    status.textContent = whiteTurn ?
        "White to Move" :
        "Black to Move";

}

function isWhite(piece) {

    if (piece === "") return false;

    return piece === piece.toUpperCase();

}

function clickSquare(row, col) {

    const piece = board[row][col];

    // Selecting a piece
    if (!selectedSquare) {

        if (piece === "") return;

        if (whiteTurn && !isWhite(piece)) return;

        if (!whiteTurn && isWhite(piece)) return;

        selectedSquare = { row, col };

        legalMoves = getLegalMoves(row, col);

        drawBoard();

        return;

    }

    // Deselect
    if (
        selectedSquare.row === row &&
        selectedSquare.col === col
    ) {

        selectedSquare = null;
        legalMoves = [];

        drawBoard();

        return;

    }

    const allowed = legalMoves.find(
        move => move.row === row && move.col === col
    );

    if (!allowed) {

        selectedSquare = null;
        legalMoves = [];

        drawBoard();

        return;

    }

    board[row][col] =
        board[selectedSquare.row][selectedSquare.col];

    board[selectedSquare.row][selectedSquare.col] = "";

    selectedSquare = null;
    legalMoves = [];

    whiteTurn = !whiteTurn;

    drawBoard();

}

function getLegalMoves(row, col) {

    const piece = board[row][col];

    const moves = [];

    if (piece === "") return moves;

    // White Pawn

    if (piece === "P") {

        if (
            row > 0 &&
            board[row - 1][col] === ""
        ) {

            moves.push({
                row: row - 1,
                col: col
            });

            if (
                row === 6 &&
                board[row - 2][col] === ""
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
            board[row - 1][col - 1] !== "" &&
            !isWhite(board[row - 1][col - 1])
        ) {

            moves.push({
                row: row - 1,
                col: col - 1
            });

        }

        if (
            row > 0 &&
            col < 7 &&
            board[row - 1][col + 1] !== "" &&
            !isWhite(board[row - 1][col + 1])
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
            board[row + 1][col] === ""
        ) {

            moves.push({
                row: row + 1,
                col: col
            });

            if (
                row === 1 &&
                board[row + 2][col] === ""
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
            board[row + 1][col - 1] !== "" &&
            isWhite(board[row + 1][col - 1])
        ) {

            moves.push({
                row: row + 1,
                col: col - 1
            });

        }

        if (
            row < 7 &&
            col < 7 &&
            board[row + 1][col + 1] !== "" &&
            isWhite(board[row + 1][col + 1])
        ) {

            moves.push({
                row: row + 1,
                col: col + 1
            });

        }

    }

    return moves;

}

// Buttons

document
.getElementById("newGame")
.onclick = startGame;

document
.getElementById("undo")
.onclick = () => {

    alert("Undo is coming soon!");

};

startGame();
