function filterOutNegatives(array) {
    // Use the filter method to create a new array with only non-negative numbers
    return array.filter(number => number >= 0);
}
const originalArray = [1, -2, 3, -4, 5, -6, 7, -8, 9];
const nonNegativeArray = filterOutNegatives(originalArray);

console.log("Original Array:", originalArray);
console.log("Array without Negative Numbers:", nonNegativeArray);

