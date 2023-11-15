function findMedian(array) {
    // Sort the array in ascending order
    const sortedArray = array.slice().sort((a, b) => a - b);

    const length = sortedArray.length;
    
    // If the length of the array is odd, return the middle element
    if (length % 2 !== 0) {
        return sortedArray[Math.floor(length / 2)];
    }
    
    // If the length of the array is even, return the average of the two middle elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return (sortedArray[middleIndex1] + sortedArray[middleIndex2]) / 2;
}
const numbersArray = [7,8,6, 1, 4, 1, 5, 9, 2, 6, 5, 3, 10 ,5];
const median = findMedian(numbersArray);

console.log("Array:", numbersArray);
console.log("Median:", median);