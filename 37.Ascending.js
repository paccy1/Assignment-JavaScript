function sortAscending(array) {
    // Use the Array.sort() method to sort the array in ascending order
    return array.sort(function(a, b) {
        return a - b;
    });
}
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = sortAscending(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array (Ascending):", sortedArray);