const boardElement = document.getElementById("board");
const status = document.getElementById("status");

const pieces = {
    r:"♜",
    n:"♞",
    b:"♝",
    q:"♛",
    k:"♚",
    p:"♟",

    R:"♖",
    N:"♘",
    B:"♗",
    Q:"♕",
    K:"♔",
    P:"♙"
};

function drawBoard() {

    boardElement.innerHTML = "";

    for(let row=0; row<8; row++){

        for(let col=0; col<8; col++){

            const square=document.createElement("div");

            square.className="square";

            square.classList.add(
                (row+col)%2===0 ? "light":"dark"
            );

            if(
                selectedSquare &&
                selectedSquare.row===row &&
                selectedSquare.col===col
            ){
                square.classList.add("selected");
            }

            const move=legalMoves.find(
                m=>m.row===row && m.col===col
            );

            if(move){

                if(board[row][col]==="")
                    square.classList.add("legal");
                else
                    square.classList.add("capture");

            }

            square.textContent=
                pieces[board[row][col]] || "";

            square.onclick=()=>clickSquare(row,col);

            boardElement.appendChild(square);

        }

    }

    status.textContent=
        whiteTurn
        ? "White to Move"
        : "Black to Move";

}

function isWhite(piece){

    if(piece==="") return false;

    return piece===piece.toUpperCase();

}

function clickSquare(row,col){

    const piece=board[row][col];

    if(!selectedSquare){

        if(piece==="") return;

        if(whiteTurn && !isWhite(piece)) return;

        if(!whiteTurn && isWhite(piece)) return;

        selectedSquare={row,col};

        legalMoves=getLegalMoves(row,col);

        drawBoard();

        return;

    }

    if(
        selectedSquare.row===row &&
        selectedSquare.col===col
    ){

        selectedSquare=null;
        legalMoves=[];

        drawBoard();

        return;

    }

    const allowed=legalMoves.find(
        m=>m.row===row && m.col===col
    );

    if(!allowed){

        selectedSquare=null;
        legalMoves=[];

        drawBoard();

        return;

    }

    board[row][col]=
        board[selectedSquare.row][selectedSquare.col];

    board[selectedSquare.row][selectedSquare.col]="";

    selectedSquare=null;
    legalMoves=[];

    whiteTurn=!whiteTurn;

    drawBoard();

}
