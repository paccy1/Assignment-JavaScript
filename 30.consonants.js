function countConsonants(str) {
    // Convert the string to lowercase to make the matching case-insensitive
    const lowerStr = str.toLowerCase();

    // Use a regular expression to match consonants (any letter that is not a vowel)
    const consonantMatches = lowerStr.match(/[bcdfghjklmnpqrstvwxyz]/g);

    // Return the count of consonant matches (null if no matches found)
    return consonantMatches ? consonantMatches.length : 0;
}

// Example usage:
const inputStr = "Hello, World!";
const consonantCount = countConsonants(inputStr);

console.log(`Original String: ${inputStr}`);
console.log(`Number of consonants: ${consonantCount}`);