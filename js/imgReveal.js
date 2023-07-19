
var miniImg = document.querySelectorAll(".img");
var bigImg = document.querySelector("#bigImgs img");
var bigImgs = document.querySelector("#bigImgs")
var closeBtn = document.querySelector("span");


miniImg.forEach(function(particularImg) {
    particularImg.addEventListener("click", function() {
    bigImgs.style.display = "block";
    closeBtn.style.display = "block";
    var imgSrc = particularImg.getAttribute("src");
    bigImg.setAttribute ("src", imgSrc);
    })
})


closeBtn.addEventListener("click", function() {
    bigImgs.style.display = "none";
})