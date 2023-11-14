function sortArrayAscending(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
var sortedArray = sortArrayAscending(someNumbers);

console.log(sortedArray);