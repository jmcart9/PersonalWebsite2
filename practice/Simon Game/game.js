var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keydown(function(event) {

    if (!started) {
        started = false;
        $("#level-title").text("Level " + level);
		nextSequence();
    }

});

$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");

    playSound(userChosenColor);

    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);


});

function nextSequence() {
	userClickedPattern = [];
	
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);


}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass('pressed');

    setTimeout(function() {
        $("#" + currentColor).removeClass('pressed');
    }, 1000);

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        playSound("wrong");
        $("body").addClass('game-over');
		$("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass('game-over');
        }, 1000);

        
		
		startOver();

    }
}

function startOver(){
	  level = 0;
  gamePattern = [];
  started = false;
}