var squares = document.querySelectorAll(".squares")
var colorDisp = document.getElementById("colorDisp")
var limit = 6
var colors = []

// Genrate random color values
function randomColor() {
 
    for (var i =0; i< limit; i++){
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)

        // Make a new colors array
        colors.push("rgb(" + r + ", " + g + ", " + b + ")")
    } 
}

function reset () {
    colors = []
    randomColor()
}

reset()

// Set answer color by choosing randomly from the random colors array
var pickedColor = colors[Math.floor(Math.random() * limit)]

// Display the color to be guessed
colorDisp.textContent = pickedColor

for(var i = 0; i<squares.length; i++){
    //assign colors to the boxes using lists
    squares[i].style.background = colors[i]

    // create click event to guess the corrects answer
    squares[i].addEventListener("click", function() {
        if (this.style.background !== pickedColor) {

             // change background of non-correct boxes as they are clicked
            this.style.background = "#232323"
        } else {
            for(var i = 0; i<squares.length; i++){
                //assign colors to the boxes using lists
                squares[i].style.background = pickedColor
            }  
        }      
        
    })

   
}