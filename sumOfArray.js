function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var numbers = [6, 2, 7, 4, 5];
var result = sumOfArray(numbers);
console.log(result);