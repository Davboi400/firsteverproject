const game = {

    board: [],

    whiteTurn: true,

    selectedSquare: null,

    legalMoves: [],

    history: []

};

function startGame() {

    game.board = [

        ["r","n","b","q","k","b","n","r"],
        ["p","p","p","p","p","p","p","p"],

        ["","","","","","","",""],

        ["","","","","","","",""],

        ["","","","","","","",""],

        ["","","","","","","",""],

        ["P","P","P","P","P","P","P","P"],
        ["R","N","B","Q","K","B","N","R"]

    ];

    game.whiteTurn = true;
    game.selectedSquare = null;
    game.legalMoves = [];
    game.history = [];

}

