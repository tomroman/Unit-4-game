
let randomNumber = Math.floor(Math.random() * 102) + 19;

let totalPoints = 0;
let wins = 0;
let losses = 0;

$("#rand-num").hmtl("<h2> + randomNumber + </h2> ");

$(".crystal").on("click", function () {
    totalPoints += parseInt(this.value);
    $("total-score").text(totalPoints);

    if (totalPoints === randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        $("#game-result").text("You Win!");
        
    }

    else if (totalPoints > randomNumber) {
        losses ++;
        $("#losses").text("Losses: " + losses);
        $("game-result").text("You lose!");
        reset();
    }
})