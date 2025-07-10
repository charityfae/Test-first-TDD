// Evelyne Uwase, Ojera Charity Faith, Darvin Nakigudde
const { expect } = require("chai");
// eslint-disable-next-line no-unused-vars
const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("should return 0 for income less than 12000", () => {
    expect(calculateTax(8000)).to.equal(0);
    expect(calculateTax(0)).to.equal(0);
  });

  it("should return 600 for income of 15000", () => {
    expect(calculateTax(15000)).to.equal(600); // 20% of (15000 - 12000) = 600
  });

  it("should return 4800 for income of 36000", () => {
    expect(calculateTax(36000)).to.equal(4800); // 20% of (36000 - 12000) = 4800
  });

  it("should return correct tax for income above 36000", () => {
    expect(calculateTax(40000)).to.equal(6400);   // 4800 + 1600
    expect(calculateTax(50000)).to.equal(10400);  // 4800 + 5600
    expect(calculateTax(100000)).to.equal(30400); // 4800 + 25600
  });
});
