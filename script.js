// Assignment Code

var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChars = upperChars.toLowerCase();
var specialChars = '!@#$%^&*()_-+=[]{}';
var numChars = '0123456789';


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
// This was done with the help of the great TA, Paul!
function generatePassword() {
  var availableCharacters = '';
  var hasUpper = '';
  var hasLower = '';
  var hasSpecial = '';
  var hasNums = '';



  // Loop until at least one character type is selected
  while (availableCharacters.length === 0) {

    var completedPassword = '';
    // Ask for password length
    var pwdLength = 0;
    while (pwdLength < 8 || pwdLength > 128) {
      var length = prompt(`How long do you want the password? Must be 8-128 characters`);
      // Validating user didn't enter a blank and did enter a number
      if (length == null) {
        pwdLength = 0;
      } else if (parseInt(length) > 0) {
        pwdLength = parseInt(length);
      }

      // Checking for correct length input
      if (pwdLength < 8 || pwdLength > 128) { // input must be 8-128
        alert('Password must be between 8 and 128 characters')
      };

    }
    
    // Does user want uppercase letters?
    hasUpper = confirm('Do you want to use uppercase letters?');
    // If yes, adds uppercase letters to string
    if (hasUpper) {
      availableCharacters = availableCharacters + upperChars;
    }
    console.log(upperChars);

    // Does user want lowercase letters?
    hasLower = confirm('Do you want to use lowercase letters?');
    // If yes, adds lowercase letters to string
    if (hasLower) {
      availableCharacters = availableCharacters + lowerChars;
    }
    // Does user want special characters?
    hasSpecial = confirm('Do you want to use special characters?');
    // If yes, adds special characters to string
    if (hasSpecial) {
      availableCharacters = availableCharacters + specialChars;
    }
    // Does user want numbers?
    hasNums = confirm('Do you want to use numbers?');
    // If yes, adds numbers to string
    if (hasNums) {
      availableCharacters = availableCharacters + numChars;
    }

    if (availableCharacters.length === 0) {
      alert('Please select at least one character type')
    }
  }

  for(i = 0; i < pwdLength; i++) {
    // get a random index based on the length of our character bank and use that to select one character from that bank and then concatenate it onto the password
    var rndIndex = Math.floor(Math.random()*availableCharacters.length);
    var rndChar = availableCharacters[rndIndex];
    completedPassword = completedPassword + rndChar;
  }
 
  return (completedPassword);

  
}

