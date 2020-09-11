// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables used by both functions, passwordCriteria() and generatePassword()
var lengthPassword = 0;
var isLowerCase = false;
var isUpperCase = false;
var isNumeric = false;
var isSpecialChar = false;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  resetGenerator();
}

// Generate password according to user choices
function generatePassword() {

  // Constants declaration: start and end ASCII numbers of different types of character
  const specialCharStart1 = 32;
  const specialCharEnd1 = 47;
  const specialCharStart2 = 58;
  const specialCharEnd2 = 64;
  const specialCharStart3 = 91;
  const specialCharEnd3 = 96;
  const specialCharStart4 = 123;
  const specialCharEnd4 = 126;
  const lowerStart = 97;
  const lowerEnd = 122;
  const upperStart = 65;
  const upperEnd = 90;
  const numStart = 48;
  const numEnd = 57;

  var charPool = []; // Empty array for storing all character needed for password generation
  var passwordArray = []; // Empty array for storing generated password

  passwordCriteria();
  // If user select lowercase, then add them to character pool
  if (isLowerCase === true) {
    charPool = charPool.concat(generateArray(lowerStart, lowerEnd));
  }

  // If user select uppercase, then add them to character pool
  if (isUpperCase === true) {
    charPool = charPool.concat(generateArray(upperStart, upperEnd));
  }

  // If user select numeric, then add them to character pool
  if (isNumeric === true) {
    charPool = charPool.concat(generateArray(numStart, numEnd));
  }

  // If user select special character, then add them to character pool
  if (isSpecialChar === true) {
    charPool = charPool.concat(generateArray(specialCharStart1, specialCharEnd1), generateArray(specialCharStart2, specialCharEnd2), generateArray(specialCharStart3, specialCharEnd3), generateArray(specialCharStart4, specialCharEnd4));
  }

  // Generate password by randomly pick element from character pool
  for (i = 0; i < lengthPassword; i++) {
    passwordArray[i] = charPool[Math.floor(Math.random() * charPool.length)];
  }
  
  // Return password array as a string
  return passwordArray.join("");
}

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
    alert("Please choose at least one of the following characters.");
    isLowerCase = confirm("Click OK to select lowercase characters.");
    isUpperCase = confirm("Click OK to select uppercase characters.");
    isNumeric = confirm("Click OK to select numeric characters.");
    isSpecialChar = confirm("Click OK to select special characters.");
  }

}

// Generate array based on ASCII number input
function generateArray(startNum, endNum) {
  var addArray = [];

  for (i = startNum; i <= endNum; i++) {
    addArray[i - startNum] = String.fromCharCode(i);
  }

  return addArray;
}

// Reset all global variables to initial values, so everything will start over when user clicks button the second time
function resetGenerator() {
  lengthPassword = 0;
  isLowerCase = false;
  isUpperCase = false;
  isNumeric = false;
  isSpecialChar = false;
}
