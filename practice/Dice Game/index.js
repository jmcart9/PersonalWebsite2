function getRandomNumber() { 

return Math.floor(Math.random() * 6) + 1; 

}

const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();

console.log(randomNumber1);

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const url1 = "images/dice" + randomNumber1 + ".png";
img1.setAttribute("src", url1);

const url2 = "images/dice" + randomNumber2 + ".png";
img2.setAttribute("src", url2);

if(randomNumber1 == randomNumber2){
	document.querySelector("h1").innerHTML = "tie!";
}
else if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "player 1 wins!";
}
else{
	document.querySelector("h1").innerHTML = "player 2 wins!";
}