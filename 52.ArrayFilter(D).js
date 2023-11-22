function filterElementsLessThanTen(array) {
    return array.filter(element => element < 10);
}
const originalArray = [5, 12, 8, 20, 6, 15, 3, 10];
const filteredArray = filterElementsLessThanTen(originalArray);

console.log("Original Array:", originalArray);
console.log("Filtered Array:", filteredArray);