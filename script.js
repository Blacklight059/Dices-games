var body = document.getElementById('body')
var scorePlayer1 = parseInt(document.getElementById('scorePlayer1'));
var scorePlayer2 = parseInt(document.getElementById('scorePlayer2'));
var sum1 = parseInt(document.getElementById('sum1'));
var sum2 = parseInt(document.getElementById('sum2'));
var msg = () => { alert('Cliquer sur New Game pour rejouer') }
var gameTour = 0;

//Create class Player
class Players {
    constructor(name, currentScore, totalScore, tour, winner) {
        this.name = name
        this.currentScore = currentScore
        this.totalScore = totalScore
        this.tour = false
        this.winner = false
    }
}


// Create players
var player1 = new Players('player1', 0, 0, false, false);
var player2 = new Players('player2', 0, 0, false, false);
var playersGame = [player1, player2]


// function NewGame
function newGame() {

    PlayerTitle1 = document.getElementById("PlayerTitle1");
    PlayerTitle1.style.fontWeight="bold";
    document.getElementById('sum1').innerHTML = 0;
    document.getElementById('sum2').innerHTML = 0;
    document.getElementById('scorePlayer1').innerHTML = 0;
    document.getElementById('scorePlayer2').innerHTML = 0;

    console.log(gameTour)
}



// function rolldice

function rollTheDice() {
    setTimeout(function() {

        sum1 = parseInt(document.getElementById('sum1').innerHTML) ;
        sum2 = parseInt(document.getElementById('sum2').innerHTML) ;

        var randomNumber = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", "assets/img/dice" + randomNumber + ".png");
 
        if (gameTour == 0) {
            playersGame[0].tour = true;
            playersGame[1].tour = false;
        }
            console.log(playersGame[0].tour)
        if (gameTour == 1 ) {
            playersGame[1].tour = true;
            playersGame[0].tour = false;
        }

        if (playersGame[0].tour === true) {
            if (randomNumber > 1) {
            sum1 = sum1 + randomNumber;
            document.getElementById("sum1").innerHTML = sum1;

            } else {
                sum1 = document.getElementById("sum1").innerHTML = 0;
            }
            
        } 
        if (playersGame[1].tour === true) {
                if (randomNumber > 1) {
                    sum2 = sum2 + randomNumber;
                    document.getElementById("sum2").innerHTML = sum2;
                } else {
                    sum2 = document.getElementById("sum2").innerHTML = 0;
                }
            }
        } 
    )

}

// function Hold
function hold() {
    setTimeout(function(){

        scorePlayer1 = parseInt(document.getElementById('scorePlayer1').innerHTML);
        scorePlayer2 = parseInt(document.getElementById('scorePlayer2').innerHTML);

        PlayerTitle1 = document.getElementById("PlayerTitle1");
        PlayerTitle2 = document.getElementById("PlayerTitle2");
        PlayerTitle1 = PlayerTitle1.style.fontWeight="normal";
        PlayerTitle2 = PlayerTitle2.style.fontWeight="bold";
        
        
        
        if (sum1 > 1) {
            gameTour = 1;
            
            console.log(gameTour);
            console.log(playersGame[1].tour);
            
            scorePlayer1 = scorePlayer1 + sum1;
            document.getElementById("scorePlayer1").innerHTML = scorePlayer1;
            document.getElementById("sum1").innerHTML = 0;
            
        }
        if (sum2 > 1) {
            gameTour = 0;
            scorePlayer2 = scorePlayer2 + sum2;
            document.getElementById("scorePlayer2").innerHTML = scorePlayer2;
            document.getElementById("sum2").innerHTML = 0;
            
        }
        
    } )
}
