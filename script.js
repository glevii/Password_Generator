// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordSize = prompt("Please choose the lenght of your password. (It must be between 8 and 128 characters in lenght).")
  var isLowerCase = false;
  var isUpperCase = false;
  var isNumber = false;
  var isSpecialChar = false;
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberString = "0123456789";
  var specialCharString = "~!@#$%^&*()_+=-`[]\{}|;':,./<>?"
  var passwordString = "";

  passwordSize = parseInt(passwordSize);
  if (passwordSize >= 8 && passwordSize <= 128) {
    //   alert(isLowerCase) 
    isLowerCase = confirm("Would you like your password to contain lowercase letters?")
    // alert(isLowerCase)
    isUpperCase = confirm("Would you like your password to contain uppercase letters?")
    isNumber = confirm("Would you like your password to contain numbers?")
    isSpecialChar = confirm("Would you like your password to contain special characters?")


    while ( passwordString.length < passwordSize ) {
      //math.random goes from 0 to 25, including decimals, math.floor round down. 1.9=>11
      var pickRandomLowerCaseIndex = Math.floor(Math.random() * 25);
      if (isLowerCase  && passwordString.length < passwordSize) {
        //passwordString=""+"u"=>"u"
        //passwordString="u"+"o"=>"uo"
        
        passwordString = passwordString + lowerCaseString.charAt(pickRandomLowerCaseIndex)
        
      }
      var pickRandomUpperCaseIndex = Math.floor(Math.random() * 25);
      if (isUpperCase  && passwordString.length < passwordSize) {
        passwordString = passwordString + upperCaseString.charAt(pickRandomUpperCaseIndex)

        
      }
      var pickRandomNumber = Math.floor(Math.random() * 8);
      if (isNumber && passwordString.length < passwordSize) {
        passwordString = passwordString + numberString.charAt(pickRandomNumber)
      }
      if (isSpecialChar && passwordString.length < passwordSize) {
        var pickRandomChar = Math.floor(Math.random() * 30);
        passwordString = passwordString + specialCharString.charAt(pickRandomChar)
        
      }
      
    }
    console.log(passwordString.length, passwordSize)
    return passwordString;

  } else {
    alert("The password must be between 8 and 128 characters in length.")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
