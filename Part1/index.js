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

const topLeft
const topCenter
const topRight
const midLeft
const midCenter
const midRight
const bottomLeft
const bottomCenter
const bottomRight