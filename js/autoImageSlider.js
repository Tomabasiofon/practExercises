var imgHolder = document.querySelectorAll(".imgHolder")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
var imgCount = 0

function reset(i) {
    for(var i = 0; i<imgHolder.length; i++) {
        imgHolder[i].classList.remove("dispBlock")
        imgHolder[i].classList.add("dispNone")
    }
}

function assign () {
    imgHolder.forEach((image, index) => {
        if (imgCount == index) {
        image.classList.add("dispBlock")
        image.classList.remove("dispNone")
       }
   });
}

// Activate on Load at intervals

window.setInterval(function(){
    imgCount++
    if (imgCount < imgHolder.length) {
    reset()
    assign()
}
else{
    imgCount = 0
    reset()
    assign()
}
}, 3000)




