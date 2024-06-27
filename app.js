var isGameOver;
var activePlayer;
var scores;
var diceDom = document.querySelector('.dice');
var diceNumber;
var roundScore;

initGame();

function initGame() {

    isGameOver=false;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    diceDom.style.display = "none";
}

document.querySelector('.btn-roll').addEventListener("click", function() {

if (isGameOver !==true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        switchToNextPlayer();
    }
}else{
    alert('TOGLOOM DUUSSAN BAINA!');
}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 30) {
        isGameOver=true;
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        diceDom.style.display = "none";
    } else {
        switchToNextPlayer();
    }
});

function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    diceDom.style.display = "none";
}

document.querySelector('.btn-new').addEventListener("click", initGame);
