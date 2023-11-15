function isValueInArray(array, value) {
    // Use the indexOf method to check if the value is present
    return array.indexOf(value) !== -1;
}
const sampleArray = [1, 2, 3, 4, 5];
const targetValue = 6;

if (isValueInArray(sampleArray, targetValue)) {
    console.log(`${targetValue} is present in the array.`);
} else {
    console.log(`${targetValue} is not present in the array.`);
}
