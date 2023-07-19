
// select image and content containers: this will be a list
var imgHolder = document.querySelectorAll(".imgHolder")

// select the previous and next buttons
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

// the click counter is initialized and it'll be used to loop into the containers list and it's incremented on "next click"
var imgCount = 0


// ojn click of any of the bottons, all containers are set to display "none"
function reset(i) {
    for(var i = 0; i<imgHolder.length; i++) {
        imgHolder[i].classList.remove("dispBlock")
        imgHolder[i].classList.add("dispNone")
    }
}

// // Each container has an index number, on "next" click, the loop counter is used to access the container at that index and then assigned a display "block" 
function assign () {
    imgHolder.forEach((image, index) => {
        if (imgCount == index) {
        image.classList.add("dispBlock")
        image.classList.remove("dispNone")
       }
   });
}


// Activate on Click 
// This is going to use a loop index counter

next.addEventListener("click", function() {
    // This is where the loop control variable increases so as to access next containers
    imgCount++
    if (imgCount < imgHolder.length) {
    // reset all conta9iners to display: 'none'
    reset()
     // assigns display: "block" to the container at the same index as the loop variable which then becomes the one that is displayed
    assign()
    
}
else{
    imgCount = 0
    reset()
    assign()
}
}  
)

prev.addEventListener("click", function() {

     // This is where the loop control variable reduces by 1 so as to access previous containers
    imgCount--
    if (imgCount >= 0) {
        // reset all conta9iners to display: 'none'
        reset()
         // assigns display: "block" to the container at the same index as the loop variable which then becomes the one that is displayed
        assign()
    }
    else{
        imgCount = imgHolder.length-1
        reset()
        assign()
    }
})