
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  
  playSound(userChosenColour);

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

});

function nextSequence(){
	var randomNumber = Math.random();
	randomNumber = randomNumber * 4;
	randomNumber = Math.floor(randomNumber);
	
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	
	playSound(randomChosenColor);


}

function playSound(name){
	
	var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

