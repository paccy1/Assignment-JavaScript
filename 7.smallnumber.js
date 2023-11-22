function findMinValue(arr) {
    var minValue = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}
var numbers = [9, 8, 78, 98, 5];
var minResult = findMinValue(numbers);
console.log(minResult);