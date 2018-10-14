var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var textDisplay = document.querySelector("span");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
// mode buttons event listeners
    for(var i = 0;i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares =6;
            if(this.textContent === "Easy"){
                numberOfSquares = 3 ;
            }else if(this.textContent === "Medium"){
                numberOfSquares = 6 ;
            }else{
                numberOfSquares = 9 ;
            }
            reset();
        });
    }
//creating the squares and the buttons
    colorDisplay.textContent = "Choose Level";
    for (var i =0;i<squares.length;i++){
        //add initial colors to squares
        //squares[i].style.backgroundColor = colors[i];
        // add click listeneres to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if(clickedColor === picked){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "PlayAgain?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}
function reset(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    console.log(numberOfSquares);
    //pick a new random color from array
    picked = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = picked;
    this.textContent = "New Colors";
    //change colors of squares
    messageDisplay.textContent ="";
    for(var i = 0;i < squares.length;i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display ="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function () {
    reset();
});
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
        /*console.log(arr);*/
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