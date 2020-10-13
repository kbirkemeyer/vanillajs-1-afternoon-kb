const board = [];

function play(clickedId) {
    const clickedElement = document.getElementById(clickedId);
    const playerSpan = document.getElementById('player');
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const midLeft = board[3];
    const midCenter = board[4];
    const midRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} wins!`);
        return;
    }
    if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
        alert(`${midLeft} wins!`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} wins!`);
        return;
    }
    if (topLeft !== undefined && midLeft === topLeft && topLeft === bottomLeft) {
        alert(`${topLeft} wins!`);
        return;
    }
    if (topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter) {
        alert(`${topCenter} wins!`);
        return;
    }
    if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
        alert(`${topRight} wins!`);
        return;
    }
    if (topRight !== undefined && midCenter === topRight && bottomLeft === topRight) {
        alert(`${topRight} wins!`);
        return;
    }
    if (topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight) {
        alert(`${topLeft} wins!`);
        return;
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game! Try again.");
    }
}