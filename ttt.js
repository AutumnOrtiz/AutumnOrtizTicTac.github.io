var x= "X";
var o= "O";
function StartX() { 
    document.turn= "X";
    square.innerText = document.turn;
    console.log(document.turn);
    switchturns();
}

function StartO() { 
    document.turn = "O";
    square.innerText = document.turn;
    console.log(document.turn);
    switchturns();
}

function switchturns() {
    if(document.turn == "X") {
        turnO();
    }
    else { 
        turnX();
    }
}

function turnX(input) {
    document.turn = "X";
    
    switchturns();
}

function turnO(input) {
    document.turn = "O";
   
    switchturns();
}