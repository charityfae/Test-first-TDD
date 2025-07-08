//factorial function
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
  return n * factorial(n - 1); // Recursive case
}

module.exports = factorial; // Export the factorial function for testing
// Note: This implementation does not handle negative numbers.
