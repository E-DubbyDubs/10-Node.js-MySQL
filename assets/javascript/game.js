score = 0;
wins = 0;
losses = 0;


// Random Number Pickins'
 var bCrystal = Math.floor((Math.random() * 12) + 1);
 var gCrystal = Math.floor((Math.random() * 12) + 1);
 var rCrystal = Math.floor((Math.random() * 12) + 1);
 var yCrystal = Math.floor((Math.random() * 12) + 1);

var computer = Math.floor((Math.random() * 101) + 19);
$("#computerNumber").append(computer);
 
function winning() {
    if (score === computer ) {
        console.log("You win!");
        alert("You win!");
        wins++;
       $("#wins").html("<p>You've won</p>" + wins);
       reset();
    } else if (score > computer) {
        console.log(score + "You lose");
        alert("You lose!");
        losses++;   
        $("#losses").html("<p>You've lost :(</p>" + losses);
        reset();
    }
}

$("#gCrystal").click(function add() {
    score = score += bCrystal;
    $("#score").html(score);
    console.log(score);
    winning();
})   

$("#bCrystal").click(function add() {
    score = score += gCrystal;
    $("#score").html(score);
    console.log(score);
    winning();
})   

$("#pCrystal").click(function add() {
    score = score += rCrystal;
    $("#score").html(score);
    console.log(pCrystal);
    winning();
})   

$("#wCrystal").click(function add() {
    score = score += yCrystal;
    $("#score").html(score);
    console.log(wCrystal);
    winning();
})   


// Game Restart Function

function reset() {
score = 0;
$("#score").html(" ");
gCrystal = Math.floor((Math.random() * 12) + 1);
bCrystal = Math.floor((Math.random() * 12) + 1);
pCrystal = Math.floor((Math.random() * 12) + 1);
wCrystal = Math.floor((Math.random() * 12) + 1);
computer = Math.floor((Math.random() * 101) + 19);
$("#computerNumber").html("<p>Try to tie:</p>" + computer);
}