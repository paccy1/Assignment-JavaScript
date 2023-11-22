function countCharacters(str) {
    // Remove spaces from the string
    var stringWithoutSpaces = str.replace(/\s/g, '');

    // Count the number of characters
    var numberOfCharacters = stringWithoutSpaces.length;

    return numberOfCharacters;
}

// Example: Count characters for the string "Hello World"
var inputString = "Hello World";
var characterCount = countCharacters(inputString);

console.log("Number of characters:", characterCount);