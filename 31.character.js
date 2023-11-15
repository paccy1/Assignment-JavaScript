function findCharIndex(str, char) {
    // Use indexOf to find the first occurrence of the character
    const index = str.indexOf(char);

    // Return the index (or -1 if the character is not found)
    return index;
}
const inputStr = "Me myself and I";
const targetChar = "a";
const charIndex = findCharIndex(inputStr, targetChar);

if (charIndex !== -1) {
    console.log(`The first occurrence of '${targetChar}' is at index ${charIndex}.`);
} else {
    console.log(`'${targetChar}' not found in the string.`);
}
