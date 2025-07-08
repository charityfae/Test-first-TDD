// Evelyn Uwase, Ojera Charity Faith, Darvin Nakigudde

// Test file for the multiply function using TDD cycles

const { expect } = require("chai"); // Import the Chai assertion library
const multiply = require("../multiply"); // Import the multiply function

// Mocha test suite for the multiply function
describe("Multiply Function - TDD Cycles", () => {
  it("Cycle 1: multiply(1, 1) should return 1", () => {
    expect(multiply(1, 1)).to.equal(1); 
  });

  it("Cycle 2: multiply(2, 2) should return 4", () => {
    expect(multiply(2, 2)).to.equal(4);
  });

  it("Cycle 3: multiply(3, 3) should return 9", () => {
    expect(multiply(3, 3)).to.equal(9);
  });

  it("Cycle 4: multiply(4, 4) should return 16", () => {
    expect(multiply(4, 4)).to.equal(16);
  });

  it("Cycle 5: multiply(23, 45) should return 1035", () => {
    expect(multiply(23, 45)).to.equal(1035);
  });
});
