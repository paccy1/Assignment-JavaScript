function findMaxValue(arr) {
    var maxValue = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxValue;
}
var numbers = [9, 8, 78, 98, 5];
var maxResult = findMaxValue(numbers);
console.log(maxResult);