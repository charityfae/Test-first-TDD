const { expect } = require("chai");
//eslint-disable-next-line no-unused-vars
const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("should return 0 for income less than 12000", () => {
    expect(calculateTax(8000)).to.equal(0);
    expect(calculateTax(0)).to.equal(0);
  });
});
