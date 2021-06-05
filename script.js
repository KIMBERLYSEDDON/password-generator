// variables added globally for prompt/confirms
var passLength
var addUpCase;
var addLowCase;
var addNumber;
var addSpecChara;
// variable arrays for password criteria chosen
var upCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChara =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", ".", "?"];
// variables to collect choices
var choices;
var fPassword=[];



var generateBtn = document.querySelector("#generate");
  // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
    passLength = prompt("How long would you like your password?")

    if(!passLength) {
        alert("This needs a value");
    } else if(passLength <8 || passLength > 128) {
        passLength = alert("You must choose a number between 8 and 128");
    }

   else{
        addUpCase = confirm("Would you like to include uppercase letter?");
        addLowCase = confirm("Would you like to include lowercase letters?");
        addNumber = confirm("Would you like to include numbers?");
        addSpecChara = confirm("Would you like to include special characters?");
    }
    if (!addUpCase && !addLowCase && !addNumber && !addSpecChara) {
          choices = alert("You must choose at least one option");
      }
    else if (addUpCase && addLowCase && addNumber) {
          choices = upCase.concat(lowCase, numbers);
      }
    else if (addUpCase && addLowCase && addSpecChara) {
        choices = upCase.concat(lowCase, specChara);
      }
    else if (addUpCase && addNumber && addSpecChara) {
        choices = upCase.concat(numbers, specChara);
      }
    else if (addLowCase && addNumber && addSpecChara) {
      choices = lowCase.concat(numbers, specChara);

    }
    else if (addUpCase && addLowCase) {
        choices = upCase.concat(lowCase);
    }
    else if (addUpCase && addNumber) {
        choices = upCase.concat(numbers);
    }
    else if (addUpCase && addSpecChara) {
        choices = upCase.concat(specChara);
    }
    else if (addLowCase && addNumber) {
        choices = lowCase.concat(numbers);
    }
    else if (addLowCase && addSpecChara) {
        choices = lowCase.concat(specChara);
    }
    else if (addNumber && addSpecChara) {
        choices = numbers.concat(specChara);
    }
    else if (addUpCase) {
        choices = upCase;
    }
    else if (addLowCase) {
        choices = lowCase;
    }
    else if (addNumber) {
        choices = numbers;
    }
    else if (addSpecChara) {
        choices = specChara;
    };
for (var i = 0; i < passLength; i++) {
    var choicesChosen = choices[Math.floor(Math.random() * choices.length)];
    fPassword.push(choicesChosen);
    }
    fPassword = fPassword.join("");
    console.log(fPassword);
    return fPassword;
    };

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
        passwordText.value = password;
    };
// runs function above
generateBtn.addEventListener("click", writePassword);





