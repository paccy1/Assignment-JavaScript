function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
const unsortedArray = [6, 12, 8, 20, 6, 15, 3, 9, 18];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array (ascending order):", sortedArray);
