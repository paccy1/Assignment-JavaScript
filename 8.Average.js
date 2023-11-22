function calculateAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;
    return average;
}

var numbers = [1, 2, 3, 4, 5];
var averageResult = calculateAverage(numbers);
console.log(averageResult);