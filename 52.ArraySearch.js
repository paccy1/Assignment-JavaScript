function findElementIndex(array, targetElement) {
    const index = array.indexOf(targetElement);
    return index;
}
const myArray = [5, 12, 8, 20, 6, 30, 3, 10];
const targetElement = 3;

const index = findElementIndex(myArray, targetElement);

if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}