var genBtn = document.querySelector("#genBtn")
var pWordDisp = document.querySelector("#pWordDisp")
var pWordOptions = [
    "a", "0", "b", "$", "c", "4", "d", 
    "e", "~", "f", "g", "1", "h",
     "i", "&", "j", "@", "k", "3", "l",
      "m", "2", "n", "^", "o", "5", "p", "%",
       "q", "#", "r", "!", "s", "t", "/",
        "u", "6", "v", "+", "w", "7", "x", "-", "y", "8", "z"
    ]

    function generatePWord(pWordOptions, pWord) {
        for (var i = 0; i < 10; i++) {
            var pickChar = Math.floor(Math.random() * 45)
           pWord = pWord + pWordOptions[pickChar]
        }
        pWordDisp.textContent =   pWord  
    }

    genBtn.addEventListener("click", () => {
        var pWord = ""
        generatePWord(pWordOptions, pWord)
    })