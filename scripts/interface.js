document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
       square.addEventListener('click', handleClick); 
    });
});

function handleClick(event){
    console.log(event.target);
    console.log(playerTime);

    let square = event.target;
    let position = square.id;
    if(handleMove(position)){
        setTimeout(()=>{
            if (playerTime == 0){
                alert("Uva campeã!");
            } else {
                alert("Limão campeão!");
            }
            
        },10);        
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'> </div>`;
}

let reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

function resetGame(){
    board =['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;
    clearFields();
}

function clearFields(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.innerHTML = '';
        square.classList.remove("border");
    });

   

}
