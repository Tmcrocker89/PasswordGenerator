// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  let generatedPassword = "";
  let pwLength = prompt("How long do you want your password? 8-128 chars");
  let pwLowerCase = confirm("Do you want lower case?");
  let pwUpperCase = confirm("Do you want upper case?");
  let pwNumeric = confirm("Do you want numeric?");
  let pwSpecialChars = confirm("Do you want special chars?");
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let specialChars = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "\\", "/", "[", "]",";", ":"]

  for(let i = 0; i < pwLength;)
  {

    if(generatedPassword.length < pwLength){

      let selectedCharType = Math.floor(Math.random() * 4)

      if(selectedCharType === 0 && pwLowerCase)
      {
        generatedPassword += lowerCase[Math.floor(Math.random() * (lowerCase.length))];
        i++
      }
      else if(selectedCharType === 1 && pwUpperCase)
      {
        generatedPassword += upperCase[Math.floor(Math.random() * (upperCase.length))];
        i++
      }
      else if(selectedCharType === 2 && pwNumeric)
      {
        generatedPassword += numeric[Math.floor(Math.random() * (numeric.length))];
        i++
      }
      else if(selectedCharType === 3 && pwSpecialChars)
      {
        generatedPassword += specialChars[Math.floor(Math.random() * (specialChars.length))];
        i++
      }

    }
  
  }

  return generatedPassword
}
