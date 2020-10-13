const board = []

function play (clickedId){
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player');
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
}

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const midLeft = board [3];
const midCenter = board[4];
const midRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

if(topLeft !== undefined && topLeft === topCenter && topRight === topLeft){
    alert(`${topLeft} wins!`);
}
if(midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
    alert(`${midLeft} wins!`);
}
if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} wins!`);
}
if(topLeft !== undefined && midLeft === topLeft && topLeft === bottomLeft){
    alert(`${topLeft} wins!`);
}
if(topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter){
    alert(`${topCenter} wins`);
}