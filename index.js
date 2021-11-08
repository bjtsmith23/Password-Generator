var generatePasswordIDBtn = document.querySelector("#generate");

var generatePassword = function() {

  var arrayPool = "!@#$%^&*(_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456";

  var specialCharStr = "!@#$%^&*(_";
  var upperCaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var loweCaseLetterStr = "abcdefghijklmnopqrstuvwxyz";
  var numberStr = "0123456789";

  var specialCharArr = specialCharStr.split("");
  var upperCaseLetterArr = upperCaseLetterStr.split("");
  var lowerCaseArr = loweCaseLetterStr.split("");
  var numberArr = numberStr.split("");

  var specialCharArr = "!@#$%^&*(_".split("");
  console.log(specialCharArr);

  var aPassword = [];

  var userChoiceLength = prompt("Enter password length: ");
  console.log(userChoiceLength);

  var userChoiceSpecialChars = confirm("Special Characters?");
  console.log(userChoiceSpecialChars);

  var userChoiceUpperCase = confirm("Upper Case?");
  console.log(userChoiceUpperCase);

  var userChoiceLowerCase = confirm("Lower Case?");
  console.log(userChoiceLowerCase);

  var userChoiceNumber = confirm("Numbers?");
  console.log(userChoiceNumber);

  // create a pool of character sets of user choices
  var userCharPool = [];

  function copyArrayPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    }
    console.log(userCharPool);
    return;
  }

  if (userChoiceSpecialChars) {
    copyArrayPool(specialCharArr);
  }

  if (userChoiceUpperCase) {
    userCharPool = userCharPool.concat(upperCaseLetterArr);
    console.log(userCharPool);
  }

  if (userChoiceLowerCase) {
    copyArrayPool(lowerCaseArr);
  }

  if (userChoiceNumber) {
    userCharPool = userCharPool.concat(numberArr);
    console.log(userCharPool);
  }


  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    console.log(userCharPool[index]);
    aPassword.push(userCharPool[index]);
  }

  console.log(aPassword);

  console.log(aPassword.join(""));

  var gPassword = aPassword.join("");

  return gPassword;
}




function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;


  return;
}



generatePasswordIDBtn.addEventListener("click", writePassword);











  // MAIN PROCESS

// function writePassword() {
//   var password = generatePassword();
//   var passwordTextEl = document.getElementById("password")

//   passwordTextEl = password;

//   return

// }

// generatePasswordIDBtn.addEventListener("click", writePassword);