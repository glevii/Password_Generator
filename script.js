// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// here Albert added vars-
//lenght of password? prompt
//the rest are confirms - include lowercase?, include uppercase?, include numbers?, include special characters?
//he then did console.logs for it all - there's a screenshot

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// validation is the most important part of the hw. validation of the exact password - hint: can do whileloop, then keep generating a password, once it's valid it can display.