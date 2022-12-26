var scorePlayer1 = 0;
var scorePlayer2 = 0;


// function NewGame
function newGame() {
    var Player1 = document.getElementById("Player1");
    Player1.style.fontWeight="bold";

    document.getElementById('sum1').innerHTML = 0;
    document.getElementById('sum2').innerHTML = 0;
    document.getElementById('scorePlayer1').innerHTML = 0;
    document.getElementById('scorePlayer2').innerHTML = 0;
}

// function rolldice
function rollTheDice() {
    setTimeout(function() {

        var sum1 = parseInt(document.getElementById('sum1').innerHTML) ;
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", "assets/img/dice" + randomNumber + ".png");

        if (randomNumber > 1) {
            sum1 = sum1 + randomNumber;
            document.getElementById("sum1").innerHTML = sum1;
            console.log(sum1);
        } else{
            sum1 = document.getElementById("sum1").innerHTML = 0;
        } 
        sum1 = sum1 + randomNumber;

       
    })

}
