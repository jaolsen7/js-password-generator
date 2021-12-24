// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = lowerChar.toUpperCase();
  var numberChar = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
  var randomChar = "";

  var length = prompt("How many characters does your password need?");
    if (length < 8 || length > 128 || isNaN(length)) {
      alert("We're sorry. Your password must be between 8-128 characters.");
      length = prompt("How many characters does your password need?");
  } 
  var lowerCase = confirm("Would you like lowercase letters?");
    if (lowerCase === true) {
      randomChar += lowerChar;
    }
  var upperCase = confirm("Would you like uppercase letters?");
    if (upperCase === true) {
        randomChar += upperChar;
    }
  var numbers = confirm("Would you like numbers?");
    if (numbers === true) {
        randomChar += numberChar;
    }
  var specials = confirm("Would you like special characters?");
    if (specials === true) {
        randomChar += specialChar;
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        password += randomChar[Math.floor(Math.random() * randomChar.length)];
    }

// 1. prompt user for password criteria
//      -let characters be a string of random letters (A-Z)
//      -let password be an empty string
//      -for loop: condition passsword.length < 4
//      -let randomChar be a string selected from characters
//      -add rancomChar to end of password
//      -end for loop:
//      -return (password);
//
//    a. password length 8 <= x <= 128
//    b. lower, upper, number, special
// 2. validate input
// 3. generate password based on critera
// 4. return password

return (password);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);