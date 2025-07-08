// Evelyn Uwase and Ojera Charity Faith and Darvin Nakigudde
//first code cycle one

/*assertEqual(multiply(1,1), 1);
function multiply(a, b) {
    return 1;
}
*/

// refactored cycle one
// This function checks if the actual value matches the expected value
// and throws an error if they do not match.
//actual value is the result of the multiply function
//expected value is the value we expect the multiply function to return
// the operation is an assertion to check if the actual value equals the expected value
//error is thrown if the assertion fails
function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: expected ${expected}, got ${actual}`);
  }
}

// This function multiplies two numbers and returns the result
// It is the actual implimentation we are testing
function multiply(a, b) {
  return a * b;
}

assertEqual(multiply(1, 1), 1);

//cycle two
assertEqual(multiply(2, 2), 4);


//cycle three
assertEqual(multiply(3, 3), 9);

//cycle four
assertEqual(multiply(4, 4), 16);

//cycle five
assertEqual(multiply(23, 45), 23*45);


