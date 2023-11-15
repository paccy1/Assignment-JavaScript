function squareArrayElements(array) {
    // Use the map method to square each element
    return array.map(element => element * element);
}
const originalArray = [10, 2, 9, 4, 5];
const squaredArray = squareArrayElements(originalArray);

console.log("Original Array:", originalArray);
console.log("Squared Array:", squaredArray);
