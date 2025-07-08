
// Evelyn Uwase, Ojera Charity Faith, Darvin Nakigudde

const { expect } = require("chai");
const factorial = require("../factorial");

describe("Factorial Function - TDD Cycles", () => {
  it("Cycle 1: factorial(0) should return 1", () => {
    expect(factorial(0)).to.equal(1);
  });

  it("Cycle 2: factorial(1) should return 1", () => {
    expect(factorial(1)).to.equal(1);
  });

  it("Cycle 3: factorial(2) should return 2", () => {
    expect(factorial(2)).to.equal(2);
  });

  it("Cycle 4: factorial(3) should return 6", () => {
    expect(factorial(3)).to.equal(6);
  });

  it("Cycle 5: factorial(4) should return 24", () => {
    expect(factorial(4)).to.equal(24);
  });

  it("Cycle 6: factorial(5) should return 120", () => {
    expect(factorial(5)).to.equal(120);
  });
});
