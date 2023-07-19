var imgs = document.querySelectorAll(".imgHolder img");
var next = document.getElementById("next")
var previous = document.getElementById("previous")
var placeHolder = document.querySelector(".placeHolder img")

// List to hold all images
var imgList = []

// index used To display image
var picNo = 0


// Copy individual images source and push in to a list
for (var i=0; i<imgs.length; i++) {
    var src = imgs[i].getAttribute("src")
    imgList.push(src)
}


// Click on button to change image by changing the image placeholder source using thye picNo image index
next.addEventListener("click", function() {
    if (picNo != imgs.length-1) {
        picNo = picNo+1;
     placeHolder.setAttribute("src", imgList[picNo])
    }
   else{
       picNo = 0
       placeHolder.setAttribute("src", imgList[picNo])
   }
})

previous.addEventListener("click", function() {
    if (picNo > 0) {
        picNo = picNo-1;
     placeHolder.setAttribute("src", imgList[picNo])
    }
   else{
       picNo = imgList.length-1;
       placeHolder.setAttribute("src", imgList[picNo])
   }
})