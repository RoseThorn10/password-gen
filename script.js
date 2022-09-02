// Assignment Code
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
  var completedPassword = '';
  // Ask for password length
  var pwdLength = 0
  while (pwdLength < 8 || pwdLength > 128) {
    pwdLength = parseInt(prompt(`How long do you want the password? Must be 8-128 characters`));
    
    if (pwdLength < 8 || pwdLength > 128) { // input must be 8-128
       alert('Password must be between 8 and 128 characters')
   };

  }
  
  // Does user want uppercase letters?
  var upperLtrs = confirm('Do you want to use uppercase letters?');
  // If yes, adds uppercase letters to string
  if (upperLtrs) {
    availableCharacters = availableCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  console.log(upperLtrs);

  // Does user want lowercase letters?
  var lowerLtrs = confirm('Do you want to use lowercase letters?');
  // If yes, adds lowercase letters to string
  if (lowerLtrs) {
    availableCharacters = availableCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  }
  // Does user want special characters?
  var specChar = confirm('Do you want to use special characters?');
  // If yes, adds special characters to string
  if (specChar) {
    availableCharacters = availableCharacters + '!@#$%^&*()_-+=[]{}';
  }
  // Does user want numbers?
  var nums = confirm('Do you want to use numbers?');
  // If yes, adds numbers to string
  if (nums) {
    availableCharacters = availableCharacters + '1234567890';
  }
  
  for(i = 0; i < pwdLength; i++) {
    // get a random index based on the length of our character bank and use that to select one character from that bank and then concatenate it onto the password
    var rndIndex = Math.floor(Math.random()*availableCharacters.length);
    var rndChar = availableCharacters[rndIndex];
    completedPassword = completedPassword + rndChar;
  }
  return (completedPassword);

  
}


