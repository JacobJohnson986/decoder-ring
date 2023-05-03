// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesarCode(letters) {
    return letters.map((character) => {
      const caesarCode = character.toLowerCase().charCodeAt();
      return caesarCode >= 97 && caesarCode <= 122 ? caesarCode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // Return false if shift is less than -25, more than 25 or there is no shift
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // Invert shift if false
    if (encode === false) {
      shift = shift * -1;
    }

    let inputletters = input.split("");
    let inputNumbers = caesarCode(inputletters);

    // Shift valid characters
    let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // Loop correctedNumbers where the shift goes left of "a" or right of "z"
    let correctedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    //Convert the code back into a string
    let outputletters = correctedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputletters.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
