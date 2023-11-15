function countVowels(str) {
    // Convert the string to lowercase to make the matching case-insensitive
    const lowerStr = str.toLowerCase();

    // Use a regular expression to match vowels (a, e, i, o, u)
    const vowelMatches = lowerStr.match(/[aeiou]/g);

    // Return the count of vowel matches (null if no matches found)
    return vowelMatches ? vowelMatches.length : 0;
}
const inputStr = "Me myself and AAAI";
const vowelCount = countVowels(inputStr);

console.log(`Original String: ${inputStr}`);
console.log(`Number of vowels: ${vowelCount}`);