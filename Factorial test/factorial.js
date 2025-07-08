function factorial(n) {
  return 1; // dummy return for test to pass temporarily
}

assertEqual(factorial(0), 1); // 0! = 1

// cycle two
function factorial(n) {
  if (n === 0) return 1;
  return n; // still dummy for next test
}

assertEqual(factorial(1), 1); // 1! = 1

//cycle three
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

assertEqual(factorial(2), 2);   // 2! = 2
assertEqual(factorial(3), 6);   // 3! = 6
assertEqual(factorial(4), 24);  // 4! = 24
assertEqual(factorial(5), 120); // 5! = 120

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: expected ${expected}, got ${actual}`);
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Factorial Tests
assertEqual(factorial(0), 1);
assertEqual(factorial(1), 1);
assertEqual(factorial(2), 2);
assertEqual(factorial(3), 6);
assertEqual(factorial(4), 24);
assertEqual(factorial(5), 120);
assertEqual(factorial(6), 720);
