function findIntersection(array1, array2) {
    // Use the filter method to create a new array containing only elements present in both arrays
    return array1.filter(element => array2.includes(element));
}
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [1, 4, 5, 6, 7];
const intersectionResult = findIntersection(arrayA, arrayB);

console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Intersection:", intersectionResult);