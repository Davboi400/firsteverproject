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

startGame();
