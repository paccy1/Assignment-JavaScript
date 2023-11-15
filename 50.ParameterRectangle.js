function calculateRectanglePerimeter(length, width) {
    // Formula for calculating the perimeter of a rectangle: 2 * (length + width)
    return 2 * (length + width);
}
const rectangleLength = 5;
const rectangleWidth = 10;
const perimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);

console.log(`The perimeter is ${perimeter}.`);