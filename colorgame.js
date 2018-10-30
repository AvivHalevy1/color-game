// var colors = ["rgb(0, 255 , 255)",
// "rgb(0, 0 , 0)",
// "rgb(255, 0, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 255, 255)",
// "rgb(0, 255, 0)",
// ];

var colors = getColors(6);
var pickedColor = colors[3];
var squares = document.querySelectorAll(".squares");
var msg = document.getElementById("msg");
var colorDisplay = document.getElementById("colorDisplay");
var btnHard = document.getElementById("hardBTN");
var btnEasy = document.getElementById("easyBTN");
var btnRest = document.getElementById("rest");
var mode = true;
var h1 = document.querySelector("h1");

colorDisplay.innerHTML =  pickedColor;


btnRest.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";
	msg.innerHTML = "";
	btnRest.innerHTML = "New Colors";

	if(mode){
		colors = getColors(6);
		pickedColor = colors[Math.floor(Math.random()*6)];
		colorDisplay.innerHTML = pickedColor;
		for(var i = 0 ; i<squares.length;i++){
			squares[i].style.backgroundColor = colors[i];
			
		}

	}else{
		colors = getColors(3);
		pickedColor = colors[Math.floor(Math.random()*3)];
		colorDisplay.innerHTML = pickedColor;
		for(var i = 0 ; i<squares.length;i++){
			squares[i].style.backgroundColor = colors[i];
			if(i>2){
				squares[i].style.backgroundColor = "#232323";

			}
		}	
	}

});


btnEasy.addEventListener("click",function(){
	btnHard.classList.remove("selected");
	btnEasy.classList.add("selected");
	mode = false;	
	h1.style.backgroundColor = "steelblue";
	colors = getColors(3);
	pickedColor = colors[Math.floor(Math.random()*3)];
	colorDisplay.innerHTML = pickedColor;
	for(var i = 0 ; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		if(i>2){
			squares[i].style.backgroundColor = "#232323";

		}
	}
});

btnHard.addEventListener("click",function(){
	btnEasy.classList.remove("selected");
	btnHard.classList.add("selected");
	colors = getColors(6);
	h1.style.backgroundColor = "steelblue";
	pickedColor = colors[Math.floor(Math.random()*6)];
	colorDisplay.innerHTML = pickedColor;
	for(var i = 0 ; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];

	}
});



for(var i = 0 ; i<colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;
		// console.log(clickedColor + "   "+ pickedColor);
		if(clickedColor === pickedColor){
			colorAll();
			msg.innerHTML = "Currect!";
			h1.style.backgroundColor = pickedColor;
			btnRest.innerHTML = "Play Again";
		}else{
			msg.innerHTML = "Wrong";
			this.style.backgroundColor = "#232323";
		}
		
	});
}




function colorAll(){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = pickedColor;

	}
}


function getColors(num){
	var arr = [];

	for(var i = 0; i<num ;i++){
		var r = Math.floor(Math.random()*255) ;
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		arr.push("rgb("+r+", "+g +", "+b+")");
	}
	return arr;
}