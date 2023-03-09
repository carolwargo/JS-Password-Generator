//Define variables
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()-_+=[]{}|;:\'"<>,.?/`~';

var lowers = false;
var uppers = false;
var numbers = false;
var specials = false;

//Selected prompt options after "click"
function passwordOptions() {
  lowers = confirm("Would you like to include lowercase characters?");
  uppers = confirm("Would you like to include uppercase characters?");
  numbers = confirm("Would you like to include numbers?"); 
  specials = confirm("Would you like to include special characters?"); 
}

//Function array used to Generate
function getAllowedChars(lowers, uppers, numbers, specials) {
  var allowedChars = '';
  
  if (lowers) {
    allowedChars += lowercaseChars;
  }
  if (uppers) {
    allowedChars += uppercaseChars;
  }
  if (numbers) {
    allowedChars += numericChars;
  }
  if (specials) {
    allowedChars += specialChars;
  }
  
  return allowedChars;
}

function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8-128 characters");
  
  // handle edge cases
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters. Please try again.");
    return;
  }
  
  passwordOptions();
  var allowedChars = getAllowedChars(lowers, uppers, numbers, specials);
  var randomPasswordGenerated = '';
  
  for (var i = 0; i < passwordLength; i++) {
    randomPasswordGenerated += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }
  
  return randomPasswordGenerated;
}

function writePassword() {
  var password = generatePassword();
  
  if (password) {
    var passwordText = document.getElementById("password");
    passwordText.innerHTML = password;
  }
}
  
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);
