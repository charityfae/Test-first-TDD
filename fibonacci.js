//fibonacci function implementation
// This function calculates the nth Fibonacci number using recursion.
// It throws an error for negative inputs.
function fibonacci(n) {
  if (n < 0) throw new Error("Negative numbers not allowed");
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

module.exports = fibonacci;
