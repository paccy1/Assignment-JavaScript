function evenNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbers(myArray);
