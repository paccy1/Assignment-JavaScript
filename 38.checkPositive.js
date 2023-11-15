function areAllPositive(array) {
    // Use the every method to check if all elements are positive
    return array.every(element => element > 0);
}
const positiveArray = [1, 2, 3, 4, 5];
const nonPositiveArray = [-1, 2, 3, 4, 5];

console.log("Are all in positiveArray positive?", areAllPositive(positiveArray));
console.log("Are all in nonPositiveArray positive?", areAllPositive(nonPositiveArray));