function play (){
    const playerSpan = document.getElementById('player');
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
    } else {
        playerSpan.innerText = 'X';
    }
}