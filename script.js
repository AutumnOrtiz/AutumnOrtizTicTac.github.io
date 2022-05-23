function startGame(){
    document.turn="X";
    document.winner=null;
    setMessage(document.turn + " gets to start.");
}

function startGame(){
  for( f = 1; f < 9; f++);
    if (f == 1) {
        setMessage("X gets to start.");
    }
    else if( f % 2 == 0) {
        setMessage("It's O's turn.");
    }
    else {
        setMessage("It's X's turn.");
    }
}

function setMessage(msg)
{
    document.getElementById('message').innerText=msg;
}

function nextMove(square){
    if(square.innerText ==""){
    square.innerText = document.turn;
    switchturns();
}else{
    setMessage("That square is already taken");
}
}

function checkForWinner(move)
{
    var result=false;
    if(checkRow(1,2,3,move) ||
        checkRow(4,5,6,move) ||
        checkRow(7,8,9,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(3,6,9,move) ||
        checkRow(1,5,9,move) ||
        checkRow(3,5,7,move))
        {
            result=true;
        }

       return result;

}

function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)== move && getBox(b)== move && getBox(c)==move){
        result=true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("s" + number).innerText;
    

}

function clearBox(number){
    console.log(number);
    document.getElementById("s" + number).innerText= "";
    //document.write("s" + number);
}