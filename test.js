//first code cycle one
/*assertEqual(multiply(1,1), 1);
function multiply(a, b) {
    return 1;
}
*/


const assert = require('assert');

function multiply(a, b) {
  return a * b;
}

assert.strictEqual(multiply(1, 1), 1);

assertEqual(multiply(2, 2), 4);

