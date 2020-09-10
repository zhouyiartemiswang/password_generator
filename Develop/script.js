// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthPassword = 0;
var isLowerCase = false;
var isUpperCase = false;
var isNumeric = false;
var isSpecialChar = false;

// Prompt criteria for user selection
function passwordCriteria() {
  
  var resultListCriteria = false;
  var firstMessage = "Please select from the following criteria to include in password: \n-Length between 8-128 characters\n-Lowercase\n-Uppercase\n-Numeric\n-Special characters";

  // First message to user with a list of password criteria
  while (resultListCriteria === false) {
    resultListCriteria = confirm(firstMessage);
  }

  // Take user input of password length
  lengthPassword = prompt("Please enter length of password (must be between 8 and 128 characters).");
  while (lengthPassword > 128 || lengthPassword < 8) {
    lengthPassword = prompt("Password length must be between 8 and 128 characters. Please enter again.");
  }

  // Take user choice of character type
  while ((isLowerCase === false) && (isUpperCase === false) && (isNumeric === false) && (isSpecialChar === false)) {
    alert("Please choose at least one type of character.");
    isLowerCase = confirm("Lowercase");
    isUpperCase = confirm("Uppercase");
    isNumeric = confirm("Numeric");
    isSpecialChar = confirm("Special Character");
  }

}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);