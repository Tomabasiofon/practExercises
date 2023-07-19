
var age = ""

function genMonth(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDay()
    var currentMonthName = months[currentMonth];
    console.log(currentMonthName)
  }
  genMonth()


  var age = ""
  function genMonth(){
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDay()
  }

 



function genMonth(){
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDay()
  }

  console.log(getMonth())




    // Checks that man's still alive
    var isAlive = true;

    // man's initials
    const firstName = "Abasi-ofon";
    const lastName = "Tom";

    // Declares man's age
    var age = someValue;

    //Generates date info to be used for exact birthday date
    function getDateData(){
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDay();
        var currentHour = currentDate.getHours();
    };

    function checkBirthDate() {
        while (isAlive) {
            getDateData();
            if (currentDay == 7 && currentMonth == 8 && currentHour == 0) {
                age++;
                alert("Happy Birthday " + lastName + " " + firstName + " Cheers!");
            };
        };
    };

    // Checks for birth day every second of the days in a year
    setInterval(checkBirthDate(), 1000);

