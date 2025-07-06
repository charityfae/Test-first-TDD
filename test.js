//first code cycle one


/*assertEqual(multiply(1,1), 1);
function multiply(a, b) {
    return 1;
}
*/


function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: expected ${expected}, got ${actual}`);
  }
}

function multiply(a, b) {
  return a * b;
}

assertEqual(multiply(1, 1), 1);
assertEqual(multiply(2, 2), 4);

//cycle two
assertEqual(multiply(2, 2), 4);


//cycle three
assertEqual(multiply(3, 3), 9);



