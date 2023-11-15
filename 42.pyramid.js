function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Add spaces before each row to center the pyramid
        let spaces = ' '.repeat(height - i);

        // Add '*' characters for the current row
        let stars = '*'.repeat(2 * i - 1);

        // Combine spaces and stars for the current row
        let row = spaces + stars;

        // Output the current row
        console.log(row);
    }
}
const pyramidHeight = 5;
console.log(`Pyramid of height ${pyramidHeight}:`);
generatePyramid(pyramidHeight);