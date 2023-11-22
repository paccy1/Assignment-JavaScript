function stringModifier(inputString, position, replacementChar) {
    if (position < 1 || position > inputString.length) {
        return "Invalid position. Please provide a valid position within the string length.";
    }

    // Convert position to array index (subtract 1 since arrays are zero-indexed)
    const index = position - 1;

    // Convert the string to an array so we can modify it
    const stringArray = inputString.split('');

    // Replace the character at the specified position
    stringArray[index] = replacementChar;

    // Join the array back into a string
    const modifiedString = stringArray.join('');

    return modifiedString;
}

// Example: Modify the string "Hello" at position 3 with the character 'X'
var result = stringModifier("Hello", 3, 'X');
console.log("Modified string:", result);