function calculateRectangleArea(length, width) {
    // Formula for calculating the area of a rectangle: length * width
    return length * width;
}

// Example usage:
const rectangleLength = 5;
const rectangleWidth = 10;
const area = calculateRectangleArea(rectangleLength, rectangleWidth);

console.log(`The area of the rectangle with length ${rectangleLength} and width ${rectangleWidth} is ${area}.`);