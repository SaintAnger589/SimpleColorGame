// alert("Connected!");

var mode = 6;
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn = document.querySelector("#easybutton");
var hardbtn = document.querySelector("#hardbutton");

easybtn.addEventListener("click",function(){
	// alert("Easy Clicked");
	console.log("Easy button");
	hardbtn.classList.remove("selected");
	resetbutton.classList.remove("selected");
	easybtn.classList.remove("selected");
	easybtn.classList.add("selected");
	mode = 3;
	colors = generateRandomColors(mode);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	for (var i=0;i<squares.length;i++)
	{
		squares[i].style.background = "#232323";
	}

	for (var i=0;i<mode;i++)
	{

		squares[i].style.background = colors[i];
	}
	h1.style.background = "#4682b4";
});
hardbtn.addEventListener("click",function(){
	// alert("hard button clicked");
	console.log("hard mode");
	hardbtn.classList.remove("selected");
	resetbutton.classList.remove("selected");
	easybtn.classList.remove("selected");
	resetbutton.textContent = "New Colors"
	hardbtn.classList.add("selected");
	mode = 6;
	colors = generateRandomColors(mode);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	for (var i=0;i<squares.length;i++)
	{
		squares[i].style.background = "#232323";
	}
	for (var i=0;i<mode;i++)
	{
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#4682b4";
})

resetbutton.addEventListener("click",function(){
	// alert("Clicked!!");
	
	hardbtn.classList.remove("selected");
	resetbutton.classList.remove("selected");
	easybtn.classList.remove("selected");
	resetbutton.classList.add("selected");
	colors = generateRandomColors(mode);
	pickedcolor = pickcolor();
	resetbutton.textContent = "New Colors";
	colorDisplay.textContent = pickedcolor;
	message.textContent ="";
	for (var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
		h1.style.background = "#4682b4";

})
colorDisplay.textContent = pickedcolor;


for (var i=0; i<squares.length;i++)
{		//add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listener to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			console.log(pickedcolor);
			console.log(clickedColor);
			if (clickedColor === pickedcolor)
			{
				// alert("You have won");
				console.log("Correct");
				message.textContent = "Correct!";
				changeColor(pickedcolor);
				h1.style.background = pickedcolor;
				resetbutton.textContent = "Play Again?"
				// message.style.color = white;
			}
			else 
			{
				// squares[i].style.background = #232323;
				// alert("Wrong");
				// console.log("Wrong");
				this.style.background = "#232323";
				message.textContent = "Try Again";
				// message.style.color = white;
			}
		});
}


function changeColor(color){
	//loop through all the squares to match color
	for (var i=0;i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickcolor(){
	console.log("colors length : " + colors.length);
	var random = Math.floor(Math.random() * colors.length);
	console.log("random:" + random);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors 
	for (var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}	

function randomColor(){
	//pick a zero from 0to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	//"rgb(r,g,b"
	return ("rgb(" + r + ", " + g + ", " + b +")");
}