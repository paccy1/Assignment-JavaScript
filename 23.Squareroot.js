function calculateSquareRoot(number) {
    if (number < 0) {
        return "Invalid input. Cannot calculate square root of a negative number.";
    }
    
    return Math.sqrt(number);
}

// Example: Calculate square root of 49
var result = calculateSquareRoot(49);
console.log("Square root:", result);