// var toDoInput = document.querySelector("#toDoInput");
// var toDoItem = document.querySelectorAll(".toDoList li");
// var newToDoList = document.querySelector("ol");

// var lis = []


// toDoInput.addEventListener("keypress", function(e) {
//     if (e.key === 'Enter') {
//         console.log(this.value)
//         var toDo = document.createElement("li")
//         var newToDoList = document.querySelector("ol");
//         toDo.setAttribute("class", "toDoItem" );
//         toDo.appendChild(document.createTextNode(this.value));
//         newToDoList.appendChild(toDo)
//     }
// })



// // toDoInput.addEventListener("keypress", function(e) {
// //     if (e.key === 'Enter') {
// //         newToDoList.innerHTML += '<li class = "toDoItem">' + this.value + '</li>';
// //         lis.push(this.value)
// //         console.log(lis)
// //     }
// // })




// toDoItem.forEach(function(item) {
//     item.addEventListener("click", function(){
//         var answer = window.confirm("Delete Todo?");
//         if (answer) {
//           console.log(item.textContent)
//         }
//         else {
//             //some code
//         }
//     })
// })

$(".toDoList").on("click", ".toDoItem", function(){
    $(this).toggleClass("completed")
})

$("#toDoInput").keypress(function(event) {
    if (event.which === 13) {
        var inputTxt = $(this).val()
        $(this).val("")
       $(".toDoList").append('<li class = "toDoItem"><span>&#10006;</span>' + inputTxt + '</li>')
    }
})

$(".toDoList").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
    event.stopPropagation()
})

$("#addBtn").click(function() {
    $("#toDoInput").fadeToggle(700)
})