var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = picked;
for (var i =0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeneres to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, picked);
        //compare color to picked color
        if(clickedColor === picked){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}
function changeColors(color) {
    //loop through all squares
    for (var i=0;i<squares.length;i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    //change the color request
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i<num;i++){
        //random color and push into array
        arr.push(randomColor());
        console.log(arr);
    }
    return arr;
}
function randomColor(){
    //pick a "red" form 0 -255
    var red = Math.floor(Math.random() * 255);
    //pick a "green" form 0 -255
    var green = Math.floor(Math.random() * 255);
    //pick a "blue" form 0 -255
    var blue= Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}