function generateRandomNumber(min, max) {
    // Generate a random decimal between 0 and 1
    const randomDecimal = Math.random();

    // Scale and shift the random decimal to fit within the given range
    const randomNumberInRange = min + (randomDecimal * (max - min + 1));

    // Use Math.floor to ensure the result is an integer
    return Math.floor(randomNumberInRange);
}
const minRange = 15;
const maxRange = 20;
const randomNum = generateRandomNumber(minRange, maxRange);

console.log(`Random number between ${minRange} and ${maxRange}: ${randomNum}`);