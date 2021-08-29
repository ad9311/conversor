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
      Hectare: {
        toAcre: 2.4710538146688,
        toHectare: 1.0,
        toSquareCentimeter: 100000000.0,
        toSquareFoot: 107639.10416697,
        toSquareInch: 15500031.000044,
        toSquareKilometer: 0.01,
        toSquareMeter: 10000.0,
        toSquareMile: 0.00386102158542,
        toSquareYard: 11959.900462997,  
      },
      SquareCentimeter: {
        toAcre: 2.4710538146688e-8,
        toHectare: 1.0e-8,
        toSquareCentimeter: 1.0,
        toSquareFoot: 0.0010763910416697,
        toSquareInch: 0.15500031000044,
        toSquareKilometer: 1.0e-10,
        toSquareMeter: 0.0001,
        toSquareMile: 3.86102158542e-11,
        toSquareYard: 0.00011959900462997,
      },
      SquareFoot: {
        toAcre: 2.2956841138659e-5,
        toHectare: 9.2903040000107e-6,
        toSquareCentimeter: 929.03040000107,
        toSquareFoot: 1.0,
        toSquareInch: 144.0,
        toSquareKilometer: 9.2903040000107e-8,
        toSquareMeter: 0.092903040000107,
        toSquareMile: 3.5870064279155e-8,
        toSquareYard: 0.11111111111111,
      },
      SquareInch: {
        toAcre: 1.5942250790736e-7,
        toHectare: 6.4516000000075E-8,
        toSquareCentimeter: 6.4516000000075,
        toSquareFoot: 0.0069444444444444,
        toSquareInch: 1.0,
        toSquareKilometer: 6.4516000000075e-10,
        toSquareMeter: 0.00064516000000075,
        toSquareMile: 2.4909766860524e-10,
        toSquareYard: 0.0007716049382716,
      },
      SquareKilometer: {
        toAcre: 247.10538146688,
        toHectare: 100.0,
        toSquareCentimeter: 10000000000.0,
        toSquareFoot: 10763910.416697,
        toSquareInch: 1550003100.0044,
        toSquareKilometer: 1.0,
        toSquareMeter: 1000000.0,
        toSquareMile: 0.386102158542,
        toSquareYard: 1195990.0462997,
      },
      SquareMeter: {
        toAcre: 0.00024710538146688,
        toHectare: 0.0001,
        toSquareCentimeter: 10000,
        toSquareFoot: 10.763910416697,
        toSquareInch: 1550.0031000044,
        toSquareKilometer: 1.0e-6,
        toSquareMeter: 1.0,
        toSquareMile: 3.86102158542e-7,
        toSquareYard: 1.1959900462997,
      },
      SquareMile: {
        toAcre: 640,
        toHectare: 258.9988110339,
        toSquareCentimeter: 25899881103.39,
        toSquareFoot: 27878400.0,
        toSquareInch: 4014489600.0,
        toSquareKilometer: 2.589988110339,
        toSquareMeter: 2589988.110339,
        toSquareMile: 1.0,
        toSquareYard: 3097600.0, 
      },
      SquareYard: {
        toAcre: 0.00020661157024793,
        toHectare: 8.3612736000097e-5,
        toSquareCentimeter: 8361.2736000097,
        toSquareFoot: 9.0,
        toSquareInch: 1296.0,
        toSquareKilometer: 	8.3612736000097e-7,
        toSquareMeter: 	0.83612736000097,
        toSquareMile: 3.228305785124e-7,
        toSquareYard: 1.0,
      },
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
