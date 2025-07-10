// Fibonacci Function - TDD Cycles
// Evelyne Uwase, Ojera Charity Faith, Darvin Nakigudde

const { expect } = require("chai");
const fibonacci = require("../fibonacci");


//mocha test suite for the Fibonacci function
describe("Fibonacci Function - TDD Cycles", () => {
  // Cycle 1: base case
  it("fibonacci(0) should return 0", () => {
    expect(fibonacci(0)).to.equal(0);
  });

  // Cycle 2: second base case
  it("fibonacci(1) should return 1", () => {
    expect(fibonacci(1)).to.equal(1);
  });

  // Cycle 3
  it("fibonacci(2) should return 1", () => {
    expect(fibonacci(2)).to.equal(1);
  });

  // Cycle 4
  it("fibonacci(3) should return 2", () => {
    expect(fibonacci(3)).to.equal(2);
  });

  // Cycle 5
  it("fibonacci(4) should return 3", () => {
    expect(fibonacci(4)).to.equal(3);
  });

  // Cycle 6
  it("fibonacci(5) should return 5", () => {
    expect(fibonacci(5)).to.equal(5);
  });

  // Cycle 7
  it("fibonacci(6) should return 8", () => {
    expect(fibonacci(6)).to.equal(8);
  });

  // Optional: Handle negative input
  it("fibonacci(-1) should throw an error", () => {
    expect(() => fibonacci(-1)).to.throw("Negative numbers not allowed");
  });
});
