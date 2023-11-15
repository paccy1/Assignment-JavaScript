function getFirstNElements(array, n) {
    // Use the slice method to get the first n elements
    return array.slice(0, n);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = 5;
const firstNElements = getFirstNElements(originalArray, n);

console.log(`Original Array: ${originalArray}`);
console.log(`First ${n} Elements: ${firstNElements}`);