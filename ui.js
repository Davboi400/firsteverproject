window.addEventListener("load", () => {

    const newGameBtn = document.getElementById("newGame");
    const undoBtn = document.getElementById("undo");

    newGameBtn.onclick = () => {
        startGame();
    };

    undoBtn.onclick = () => {
        alert("Undo coming soon!");
    };

});
