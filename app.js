
var player = 0;
var currentScore = 0;
var dice;
var totalScore  = [0 , 0];

document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener('click' , rollDice);
document.querySelector(".btn-hold").addEventListener('click' , hold);
document.querySelector(".btn-new").addEventListener('click' , initGame);

initGame();

function rollDice(){
    dice = Math.floor(Math.random()*6 + 1);
    console.log(Math.floor(dice));
    if(dice == 1){
        currentScore = 0;
        switchPlayer();
    }
    else{
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png";
        currentScore+=dice;
        document.getElementById("current-" + player).textContent = currentScore;
    }
}
            
    function hold(){
        totalScore[player]+=currentScore;
        currentScore = 0;
        document.getElementById("score-" + player).textContent = totalScore[player];
        if(totalScore[player] >=30){
            document.getElementById("name-" + player).textContent = "WINNER";
            document.querySelector(".btn-roll").style.display = "none";
            document.querySelector(".btn-hold").style.display = "none";

        }
        else{
            switchPlayer();
        }
}

function initGame(){
    var player = 0;
    var currentScore = 0;
    var dice;
    var totalScore  = [0 , 0];
    document.querySelector(".dice").style.display = "none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

}
    
function switchPlayer(){
    document.querySelector(".dice").style.display = "none";
    document.getElementById("current-" + player).textContent = currentScore;
    if(player == 0)
    player = 1;
    else
    player = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}
