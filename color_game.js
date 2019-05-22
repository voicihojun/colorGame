// <li> easy, hard, newcolors need to be changed by <button>
// when we use easy mode and we search the right answer, the squares' number need to be 3. 
// just one line. 
// and in using transition, disappering the square take more time like fading out. 
// the other functions are implemented!. 


var squares = document.querySelectorAll('.square');
var rgb;

function makeRgb() {
	var r,g,b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);	
	var result = "rgb(" + r + ", " + g + ", " + b + ")";
	return result;
}

function makeNewColors() {
	if(document.getElementById("newColors").textContent == "PLAY AGAIN?") {
		document.getElementById("newColors").textContent = "NEW COLORS";
	}
	document.getElementsByTagName("h3")[0].style.backgroundColor = "skyblue";
	document.getElementById("message").innerHTML = "";
	rgb = makeRgb();
	rgbEach = rgb.slice(4, -1).split(", ");
	var randomNum = Math.floor(Math.random() * squares.length);
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
	var line2 = document.getElementsByClassName("line2")
	for(var i=0; i < line2.length; i++) {
		line2[i].style.visibility = "hidden";
	}

	squares = document.querySelectorAll('.line1');
	makeNewColors();
}

function makeItHard() {	
	var line2 = document.getElementsByClassName("line2")
	console.log(line2);
	for(var i=0; i < line2.length; i++) {
		line2[i].style.visibility = "visible";
	}
	squares = document.querySelectorAll('.square');
	makeNewColors();
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
			document.getElementById("message").innerHTML = "CORRECT!";
			document.querySelector("h3").style.backgroundColor = rgb;
			document.querySelector("#newColors").textContent = "PLAY AGAIN?";
		} 
	} else {
		this.style.visibility = "hidden";
		document.getElementById("message").innerHTML = "TRY AGAIN?";
	}	
}


