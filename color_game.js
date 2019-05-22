
var squares = document.querySelectorAll('.square');
var rgb, rgbEach;

function makeRgb() {
	var r,g,b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);	
	var result = "rgb(" + r + ", " + g + ", " + b + ")";
	return result;
}

function makeNewColors() {
	rgb = makeRgb();
	rgbEach = rgb.slice(4, -1).split(", ");
	var randomNum = Math.floor(Math.random() * 6);
	console.log("random number is : " + randomNum);
	for(var i=0; i < squares.length; i++) {	
		if(i == randomNum) {

			squares[i].style.backgroundColor = rgb;	
			console.log("real rgb is " + rgb);
		} else {
			squares[i].style.backgroundColor = makeRgb();
			console.log("square[" + i + "] is : " + squares[i].style.backgroundColor);		
		}

		squares[i].addEventListener("click", search);	
		
	}
	var red = document.getElementById("number1");
	red.innerHTML = rgbEach[0];
	var green = document.getElementById("number2");
	green.innerHTML = rgbEach[1];
	var blue = document.getElementById("number3");
	blue.innerHTML = rgbEach[2];

}	

function makeItEasy() {	
	var line = document.getElementsByClassName("line")
	for(var i=0; i < line.length; i++) {
		line[i].style.visibility = "hidden";
	}
}

function makeItHard() {	
	var line = document.getElementsByClassName("line")
	console.log(line);
	for(var i=0; i < line.length; i++) {
		line[i].style.visibility = "visible";
	}
}

window.onload = makeNewColors();
document.getElementById("newColors").addEventListener("click", makeNewColors);
document.getElementById("easy").addEventListener("click", makeItEasy);
document.getElementById("hard").addEventListener("click", makeItHard);


function search() {
	
	console.log(rgb);
	var bgRgb = this.style.backgroundColor;
	console.log(bgRgb);
	if(rgb == bgRgb) {
		for(var i=0; i < squares.length; i++){
			squares[i].style.visibility = "visible";	
			squares[i].style.backgroundColor = rgb;	
		} 
	} else {
		this.style.visibility = "hidden";
	}	
}


