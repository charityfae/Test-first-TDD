function calculateTax(income) {
  if (income <= 12000) {
    return 0;
  } else if (income <= 36000) {
    return (income - 12000) * 0.2;
  } else {
    const baseTax = (36000 - 12000) * 0.2; // 4800
    const upperTax = (income - 36000) * 0.4; // 40% of the amount above 36000
    return baseTax + upperTax;
  }
}

module.exports = { calculateTax };
