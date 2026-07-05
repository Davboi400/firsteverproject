function getLegalMoves(row,col){

    const piece=board[row][col];

    const moves=[];

    if(piece==="")
        return moves;

    if(piece==="P"){

        if(
            row>0 &&
            board[row-1][col]===""
        ){

            moves.push({
                row:row-1,
                col:col
            });

            if(
                row===6 &&
                board[row-2][col]===""
            ){

                moves.push({
                    row:row-2,
                    col:col
                });

            }

        }

        if(
            row>0 &&
            col>0 &&
            board[row-1][col-1]!=="" &&
            !isWhite(board[row-1][col-1])
        ){

            moves.push({
                row:row-1,
                col:col-1
            });

        }

        if(
            row>0 &&
            col<7 &&
            board[row-1][col+1]!=="" &&
            !isWhite(board[row-1][col+1])
        ){

            moves.push({
                row:row-1,
                col:col+1
            });

        }

    }

    if(piece==="p"){

        if(
            row<7 &&
            board[row+1][col]===""
        ){

            moves.push({
                row:row+1,
                col:col
            });

            if(
                row===1 &&
                board[row+2][col]===""
            ){

                moves.push({
                    row:row+2,
                    col:col
                });

            }

        }

        if(
            row<7 &&
            col>0 &&
            board[row+1][col-1]!=="" &&
            isWhite(board[row+1][col-1])
        ){

            moves.push({
                row:row+1,
                col:col-1
            });

        }

        if(
            row<7 &&
            col<7 &&
            board[row+1][col+1]!=="" &&
            isWhite(board[row+1][col+1])
        ){

            moves.push({
                row:row+1,
                col:col+1
            });

        }

    }

    return moves;

}
