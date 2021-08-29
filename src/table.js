class Table {
  getAreaTables = () => {
    const areaTable = {
      Acre: {
        toAcre: 1.0,
        toHectare: 0.40468564224047,
        toSquareCentimeter: 40468564.224047,
        toSquareFoot: 43560,
        toSquareInch: 6272640,
        toSquareKilometer: 0.0040468564224047,
        toSquareMeter: 4046.8564224047,
        toSquareMile: 0.0015625,
        toSquareYard: 4840,
      },
      Hectare: {},
      SquareCentimeter: {},
      SquareFoot: {},
      SquareInch: {},
      SquareKilometer: {},
      SquareMeter: {},
      SquareMile: {},
      SquareYard: {},
    };
    return areaTable;
  }

  getMassTables = () => {
    const massTable = {
      Carat: {},
      Centigram: {},
      Gram: {},
      Kilogram: {},
      Miligram: {},
      Pound: {},
      TonMetric: {},
    };
    return massTable;
  }

  getLengthTables = () => {
    const lengthTable = {
      Centimeter: {},
      Foot: {},
      Gram: {},
      Inch: {},
      Kilometer: {},
      Meter: {},
      Mile: {},
      Yard: {},
    };
    return lengthTable;
  }

  getTemperatureTables = () => {
    const temperatureTable = {
      Celsius: {},
      Fahrenheit: {},
      Kelvin: {},
      Rankine: {},
    };
    return temperatureTable;
  }

  getVolumeTables = () => {
    const volumeTable = {
      CubicCentimeter: {},
      CubicFoot: {},
      CubicInch: {},
      CubicMeter: {},
      Gallon: {},
      Liter: {},
      Milliliter: {},
      Ounce: {},
      Tablespoon: {},
    };
    return volumeTable;
  }

  getUnitTable = (selection, table) => {
    const unitTable = table[selection.source];
    return unitTable;
  }

  getQuantityTable = (selection) => {
    const tableOfUnits = {
      Area: this.getAreaTables(),
      Mass: this.getMassTables(),
      Length: this.getLengthTables(),
      Temperature: this.getTemperatureTables(),
      Volume: this.getVolumeTables(),
    };
    const quantityTable = tableOfUnits[selection.quantity];
    return this.getUnitTable(selection, quantityTable);
  }
}

const table = new Table();
export default table;
