// Define variables for form elements
const passwordLength = document.getElementById("password-length");
const includeUpper = document.getElementById("include-upper");
const includeLower = document.getElementById("include-lower");
const includeNumbers = document.getElementById("include-numbers");
const includeSpecial = document.getElementById("include-special");

// Define function to generate a random character
function getRandomCharacter(charset) {
  return charset(Math.floor(Math.random() * charset.length));
}

// Define function to generate a password
function generatePassword() {
  // Get the selected password length
  const length = passwordLength.value;

  // Define character sets for each type of character
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Initialize the password as an empty string
  let password = "";

  // Initialize the character for the following
  let charset = "";

  // If selection includes uppercase letters, add the upperChars set to the charset
  if (includeUpper.checked) {
    charset += upperChars;
  }

  // If selection includes lowercase letters, add the lowerChars set to the charset
  if (includeLower.checked) {
    charset += lowerChars;
  }

  // If selection includes numbers, add the numberChars set to the charset
  if (includeNumbers.checked) {
    charset += numberChars;
  }

  // If selection includes special characters, add the specialChars set to the charset
  if (includeSpecial.checked) {
    charset += specialChars;
  }

  // If no character sets were selected, alert the user and return an empty password
  if (charset.length === 0) {
    alert("Please select at least one character set to include in the password.");
    return "";
  }

  // Generate a random character from the selected charset for the length of the password
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(charset);
  }

  return password;
}