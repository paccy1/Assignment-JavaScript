function calculateArea(shape, dimensions) {
    switch (shape.toLowerCase()) {
        case 'circle':
            const radius = parseFloat(dimensions);
            if (!isNaN(radius) && radius > 0) {
                const area = Math.PI * Math.pow(radius, 2);
                console.log(`Area of the circle: ${area.toFixed(2)}`);
            } else {
                console.log('Invalid input for circle dimensions.');
            }
            break;
        case 'square':
            const side = parseFloat(dimensions);
            if (!isNaN(side) && side > 0) {
                const area = Math.pow(side, 2);
                console.log(`Area of the square: ${area.toFixed(2)}`);
            } else {
                console.log('Invalid input for square dimensions.');
            }
            break;
        case 'triangle':
            const [base, height] = dimensions.split(',').map(parseFloat);
            if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
                const area = 0.5 * base * height;
                console.log(`Area of the triangle: ${area.toFixed(2)}`);
            } else {
                console.log('Invalid input for triangle dimensions.');
            }
            break;
        default:
            console.log('Invalid shape input.');
    }
}
const shape = 'square';
const dimensions = '9';
calculateArea(shape, dimensions);
