function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the original string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
const inputStr = "She Can Code Africa";
const result = isPalindrome(inputStr);

if (result) {
    console.log(`${inputStr} is a palindrome.`);
} else {
    console.log(`${inputStr} is not a palindrome.`);
}