var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var options = ["rock","scissors","paper"];
    var random = Math.floor(Math.random() * (0 - 3 + 1)) + 0;
    return options[random];
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if(userValue == "rock" && aiValue == "paper"){
        return "winner";
        userPoint += 1;
    }else if(userValue == "scissors" && aiValue == "paper"){
        return "winner";
        userPoint += 1;
    }else if(userValue == "paper" && aiValue == "rock"){
        return "winner";
        userPoint += 1;
    }else if(userValue == aiValue){
        return "draw";
    }else{
        aiPoint += 1;
    }
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){

});
