function combineArrays(arrayOne, arrayTwo) {
    // Use the concat method to combine the arrays
    var combinedArray = arrayOne.concat(arrayTwo);
    return combinedArray;
}
var arrayOne = ['a', 'b', 'c', 'd'];
var arrayTwo = ['e', 'f', 'g'];

var resultArray = combineArrays(arrayOne, arrayTwo);
console.log(resultArray);