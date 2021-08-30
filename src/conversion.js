class Conversion {
  constructor() {
    this.result = 0.0;
  }

  newConversion(quantityTable, userInput, target) {
    const fromTable = quantityTable[`to${target}`];
    if (typeof fromTable === 'number') {
      this.result = fromTable * parseFloat(userInput);
    } else {
      this.result = fromTable(parseFloat(userInput));
    }
    return this.result;
  }
}

const conversion = new Conversion();
export default conversion;
