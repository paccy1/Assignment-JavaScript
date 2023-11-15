function sumOfEvenNumbers(array) {
    // Use the reduce method to sum the even numbers
    return array.reduce(function(sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }
        return sum;
    }, 0);
}
const numbersArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumOfEvenNumbers(numbersArray);

console.log("Array:", numbersArray);
console.log("Sum of Even Numbers:", evenSum);
