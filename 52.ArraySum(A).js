function calculateSum(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return 0;
    }

    // Use the reduce method to calculate the sum
    const totalSum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

    return totalSum;
}
const myArray = [1, 2, 3, 4, 5];
const result = calculateSum(myArray);
console.log(result);
