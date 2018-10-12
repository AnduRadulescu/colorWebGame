var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var picked = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = picked;

for (var i =0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeneres to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var currentColor = this.style.backgroundColor;
        //compare color to picked color
        if(currentColor === picked){
            alert("you got it");
        }else{
            this.style.backgroundColor = "#232323";
        }
    });
}