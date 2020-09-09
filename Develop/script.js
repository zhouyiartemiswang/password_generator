// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthPassword = 0;
var isLowerCase = true;
var isUpperCase = true;
var isNumeric = true;
var isSpecialChar = true;

// Prompt criteria to user
function passwordCriteria() {
  var resultListCriteria = false;
  var firstMessage = "Please select from the following criteria to include in password: \n-Length between 8-128 characters\n-Lowercase\n-Uppercase\n-Numeric\n-Special characters";

  while (resultListCriteria === false) {
    resultListCriteria = confirm(firstMessage);
  }

  lengthPassword = prompt("Please enter length of password (must be between 8 and 128 characters)");
  while (lengthPassword > 128 || lengthPassword < 8) {
    lengthPassword = prompt("Password length must be between 8 and 128 characters. Please enter again.");
  }

  // isLowerCase = confirm("Lowercase");
  // isUpperCase = confirm("Uppercase");
  // isNumeric = confirm("Numeric");
  // isSpecialChar = confirm("Special Character");

}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
