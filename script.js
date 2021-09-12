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

//this function takes in the parameters giving and generates the password
function generatePassword(){
  let generatedPassword = "";
  //prompts for how long the password needs to be
  let pwLength = prompt("How long do you want your password? 8-128 chars");
  //asks if you want to include lower case letters
  let pwLowerCase = confirm("Do you want lower case letters?");
  //asks if you want to include upper case letters
  let pwUpperCase = confirm("Do you want upper case letters?");
  //asks if you want to include numbers
  let pwNumeric = confirm("Do you want numeric values?");
  //asks if you want to lincude special characters
  let pwSpecialChars = confirm("Do you want special chars?");

  //arrays of the different value types
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let specialChars = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "\\", "/", "[", "]",";", ":"]

  //loops the length of the pw requested
  for(let i = 0; i < pwLength;)
  {
    console.log(generatedPassword.length)
    //on the first pass through this makes sure atleast 1 of each type selected is entered into the password
    if(generatedPassword.length === 0)
    {
      if(pwLowerCase)
      {
        generatedPassword += lowerCase[Math.floor(Math.random() * (lowerCase.length))];
        i++
      }
      if(pwUpperCase)
      {
        generatedPassword += upperCase[Math.floor(Math.random() * (upperCase.length))];
        i++
      }
      if(pwNumeric)
      {
        generatedPassword += numeric[Math.floor(Math.random() * (numeric.length))];
        i++
      }
      if(pwSpecialChars)
      {
        generatedPassword += specialChars[Math.floor(Math.random() * (specialChars.length))];
        i++
      }
    }
    //after it includes atleast one of each type, as long as the password length is less than the required length
    //it selects a random number, then selects a random position in the array to get the character to concatonate to the password
    else if(generatedPassword.length < pwLength){

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
  //returns the password
  return generatedPassword
}
