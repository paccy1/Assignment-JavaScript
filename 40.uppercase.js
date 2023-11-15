function convertToUpperCase(array) {
    // Use the map method to convert each string to uppercase
    return array.map(str => str.toUpperCase());
}
const originalArray = ["apple", "banana", "orange", "grape"];
const uppercasedArray = convertToUpperCase(originalArray);

console.log("Original Array:", originalArray);
console.log("Uppercased Array:", uppercasedArray);