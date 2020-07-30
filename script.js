/**
 * A function that takes in a string and outputs the number of vowels (not counting y).
 * @param {string} inputStr
 * @returns {number} the number of vowels inputStr
 */

var vowels = RegExp(/[aeiou]/)
  
var submitBtn = document.getElementById("button")

function countVowels(inputStr){

    var inputStr = document.getElementById("customer-entry").value
    console.log(inputStr)
    var vowelCount = 0
    var inputText = inputStr

    for (var i = 0; i < inputStr.length; i++) {

        var stringLetter = inputText[i]

        if (vowels.test(stringLetter) === true) {

            console.log("true")
            vowelCount++
        }
    }

    console.log(vowelCount) 
}

submitBtn.addEventListener("click", function(){
    event.preventDefault()
    countVowels()
})

countVowels("hello") //2
countVowels("you are great!") //6
countVowels("why") //0 