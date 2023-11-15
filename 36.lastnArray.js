function removeLastElement(array) {
    // Use the slice method to create a new array without the last element
    return array.slice(0, -1);
}
const originalArray = [1, 2, 3, 4, 5];
const newArrayWithoutLastElement = removeLastElement(originalArray);

console.log("Original Array:", originalArray);
console.log("Array without Last Element:", newArrayWithoutLastElement);
