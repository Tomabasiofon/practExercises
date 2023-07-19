var tabs = document.querySelectorAll(".tabBtn")
var tabDisplay = document.querySelectorAll(".tabDisplay")



function resetDisplay() {
    tabDisplay.forEach(display => {
        display.classList.remove("dispBlock")
        display.classList.add("dispNone")
    });
    
    tabs.forEach(tab => {
        tab.style.background = "transparent"
        tab.classList.remove("tabOutlineOn")
    });
}

function assignDisplay(index) {
    tabDisplay[index].classList.add("dispBlock")
    tabDisplay[index].classList.remove("dispNone")
    
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", function(){
        resetDisplay();
        assignDisplay(index)
        var tabColor = getComputedStyle(tabDisplay[index]).background
        tab.style.background = tabColor
        tab.classList.add("tabOutlineOn")
        $(".DisplayCont").fadeIn(700)
    })
});


function genMonth(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentMonthName = months[currentMonth];
    console.log(currentMonthName)
  }

  genMonth()

  