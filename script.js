let randomNumberValue=getRandomNumber()
let guesses = []

window.onload= function(){

    document.getElementById("number-submit").addEventListener("click", playGame)
    document.getElementById("restart-game").addEventListener("click", initGame)
    
}


function initGame(){
    randomNumberValue=getRandomNumber()
    document.getElementById("number-guess").value="";
    document.getElementById("result").innerHTML="";
    guesses=[]
    document.getElementById("history").innerHTML="";

}
function playGame(){
   
    let numberGuess = document.getElementById("number-guess").value
    
    displayResult(numberGuess);
    saveGuessHistory(numberGuess)
    displayHistory()
}

function getRandomNumber(){
    const randomVariable = Math.floor(Math.random()*101)
   
    return randomVariable
}

function displayHistory(){
    let index=guesses.length-1;
    let list="<ul class='list-group'>";
    
    while(index >= 0){
        list += "<li class='list-group-item'>"+
        "You guessed" + guesses[index] + "</li>"
        index-=1
    }
    list +="</ul>"
    document.getElementById("history").innerHTML= list;
}

function getDialog(dialogType, text){
    let dialog;
   
    switch (dialogType){
        case "warning":
            dialog = "<div class ='alert alert-warning' role='alert'>"
            
            break;
        
        case "won":
            dialog = "<div class = 'alert alert-success' role='alert'>"
            break;
    }
    dialog +=text;
    dialog += "</div>"

    return dialog;
}

function displayResult(numberGuess){


    if (numberGuess > randomNumberValue){
        showNumberAbove()
    } 
    else if (numberGuess < randomNumberValue) {
        showNumberBelow()
    }
    else{
        gameWon()
    }
}

function gameWon(){
    const text="You have won the game"

    document.getElementById("result").innerHTML=getDialog("won", text)
}

function showNumberAbove(){
    const text = "Your guess is too high"
   
    document.getElementById("result").innerHTML=getDialog("warning", text)
}

function showNumberBelow(){
    const text = "Your guess is too low"

    document.getElementById("result").innerHTML=getDialog("warning", text)
}

function saveGuessHistory(guess){
     guesses.push(guess)
}
