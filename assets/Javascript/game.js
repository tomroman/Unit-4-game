
let randomNumber = Math.floor(Math.random() * 102) + 19;

let totalPoints = 0;
let wins = 0;
let losses = 0;

$("#random-number").html("<h2>" + randomNumber + "</h2>");

$(".crystal").on("click", function () {
    totalPoints += parseInt(this.value);
    $("#total-score").text(totalPoints);

    if (totalPoints === randomNumber) {
        wins ++;
        $("#wins").text("Wins: " + wins);
        $("#game-result").text("You Win!");
        reset();
        
    }

    else if (totalPoints > randomNumber) {
        losses ++;
        $("#losses").text("Losses: " + losses);
        $("game-result").text("You lose!");
        reset();
    }
})

function crystalPoints () {
    let redPoints = Math.ceil(Math.random() * 12 );
    let bluePoints = Math.ceil(Math.random() * 12 );
    let yellowPoints = Math.ceil(Math.random() *12 );
    let greenPoints = Math.ceil(Math.random() *12 );

    $("#red-crystal").val(redPoints);
    $("#blue-crystal").val(bluePoints);
    $("#yellow-crystal").val(yellowPoints);
    $("#green-crystal").val(greenPoints);

}

function reset () {
    totalPoints = 0;
    $("#total-score").text(totalPoints);
    randomNumber = Math.floor(Math.random() * 102 ) + 19;
    $("#random-Number").html("<h2>") + randomNumber + "</h2>"; 
    crystalPoints();
}

crystalPoints();