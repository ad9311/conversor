class Conversion {
  newConversion(quantityTable, userInput, target) {
    const base = quantityTable[`to${target}`];
    this.result = base * parseFloat(userInput);
    return this.result;
  }
}

const conversion = new Conversion();
export default conversion;
