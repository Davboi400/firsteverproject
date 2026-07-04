const boardElement = document.getElementById("board");

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

function drawBoard(){

    boardElement.innerHTML="";

    for(let row=0;row<8;row++){

        for(let col=0;col<8;col++){

            const square=document.createElement("div");

            square.classList.add("square");

            if((row+col)%2===0)
                square.classList.add("light");
            else
                square.classList.add("dark");

            square.dataset.row=row;
            square.dataset.col=col;

            const piece=board[row][col];

            square.textContent=pieces[piece]||"";

            boardElement.appendChild(square);

        }

    }

}

drawBoard();
