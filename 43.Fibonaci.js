function generateFibonacci(n) {
    let fibonacciSequence = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fibonacciSequence.push(i);
        } else {
            // Calculate the next Fibonacci number by adding the last two numbers
            fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
        }
    }

    return fibonacciSequence;
}
const n = 10;
const fibonacciResult = generateFibonacci(n);

console.log(`Fibonacci sequence up to ${n} numbers:`, fibonacciResult);