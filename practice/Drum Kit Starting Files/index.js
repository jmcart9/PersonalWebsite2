

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
	//document.querySelector(".drum")[i].addEventListener("click", handleClick);
	document.querySelectorAll(".drum")[i].addEventListener("click", playDrum);

}


function handleClick(){
	alert("hello!");
}

function playDrum(){
	
	this.style.color = "white";
	
	var audio = new Audio('sounds/crash.mp3');
	audio.play();
	
}

