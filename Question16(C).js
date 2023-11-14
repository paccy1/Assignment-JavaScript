function displayModifiedArray(arr) {
    // Extract the last 3 numbers
    var lastThree = arr.slice(-3);

    // Sort the array in ascending order
    var sortedArray = arr.slice().sort(function(a, b) {
        return a - b;
    });

    // Extract the first 3 numbers from the sorted array
    var firstThreeFromSorted = sortedArray.slice(0, 3);

    // Extract the first 3 numbers from the original array
    var firstThree = arr.slice(0, 3);

    // Concatenate the arrays
    var modifiedArray = lastThree.concat(firstThreeFromSorted, firstThree);

    return modifiedArray;
}

var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
var modifiedArray = displayModifiedArray(someNumbers);

console.log(modifiedArray);