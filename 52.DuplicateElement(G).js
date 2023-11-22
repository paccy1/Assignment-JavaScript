function findDuplicates(array) {
    const duplicates = [];
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
    }

    return duplicates;
}
const myArray = [5, 12, 12, 29, 6, 15, 3 , 5, 10, 29, 8];
const duplicateElements = findDuplicates(myArray);

if (duplicateElements.length > 0) {
    console.log("Duplicate elements found:", duplicateElements);
} else {
    console.log("No duplicate elements found in the array.");
}