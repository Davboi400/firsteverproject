const boardElement = document.getElementById("board");
const status = document.getElementById("status");

const pieces = {
    r:"♜", n:"♞", b:"♝", q:"♛", k:"♚", p:"♟",
    R:"♖", N:"♘", B:"♗", Q:"♕", K:"♔", P:"♙"
};

let board = [
    ["r","n","b","q","k","b","n","r"],
    ["p","p","p","p","p","p","p","p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P","P","P","P","P","P","P","P"],
    ["R","N","B","Q","K","B","N","R"]
];

let selected = null;
let whiteTurn = true;

function drawBoard(){

    boardElement.innerHTML="";

    for(let row=0; row<8; row++){

        for(let col=0; col<8; col++){

            const square=document.createElement("div");

            square.classList.add("square");

            if((row+col)%2===0)
                square.classList.add("light");
            else
                square.classList.add("dark");

            if(selected &&
               selected.row===row &&
               selected.col===col){
                square.classList.add("selected");
            }

            square.dataset.row=row;
            square.dataset.col=col;

            const piece=board[row][col];

            square.textContent=pieces[piece] || "";

            square.onclick=()=>clickSquare(row,col);

            boardElement.appendChild(square);

        }

    }

    status.textContent = whiteTurn
        ? "White to Move"
        : "Black to Move";
}

function isWhite(piece){
    return piece && piece===piece.toUpperCase();
}

function clickSquare(row,col){

    const piece = board[row][col];

    if(selected===null){

        if(piece==="") return;

        if(whiteTurn && !isWhite(piece)) return;

        if(!whiteTurn && isWhite(piece)) return;

        selected={row,col};

        drawBoard();

        return;
    }

    if(selected.row===row && selected.col===col){

        selected=null;

        drawBoard();

        return;
    }

    board[row][col]=board[selected.row][selected.col];

    board[selected.row][selected.col]="";

    selected=null;

    whiteTurn=!whiteTurn;

    drawBoard();

}

drawBoard();
