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
        toSquareKilometer: 8.3612736000097e-7,
        toSquareMeter: 0.83612736000097,
        toSquareMile: 3.228305785124e-7,
        toSquareYard: 1.0,
      },
    };
    return areaTable;
  }

  getMassTables = () => {
    const massTable = {
      Carat: {
        toCarat: 1.0,
        toCentigram: 20.0,
        toGram: 0.2,
        toKilogram: 0.0002,
        toMilligram: 200.0,
        toPound: 0.00044092452436976,
        toTonMetric: 2.0e-7,
      },
      Centigram: {
        toCarat: 0.05,
        toCentigram: 1.0,
        toGram: 0.01,
        toKilogram: 1.0e-5,
        toMilligram: 10.0,
        toPound: 2.2046226218488e-5,
        toTonMetric: 1.0e-8,
      },
      Gram: {
        toCarat: 5.0,
        toCentigram: 100.0,
        toGram: 1.0,
        toKilogram: 0.001,
        toMilligram: 1000.0,
        toPound: 0.0022046226218488,
        toTonMetric: 1.0e-6,
      },
      Kilogram: {
        toCarat: 5000.0,
        toCentigram: 100000.0,
        toGram: 1000.0,
        toKilogram: 1.0,
        toMilligram: 1000000.0,
        toPound: 2.2046226218488,
        toTonMetric: 0.001,
      },
      Milligram: {
        toCarat: 0.005,
        toCentigram: 0.1,
        toGram: 0.001,
        toKilogram: 1.0E-6,
        toMilligram: 1.0,
        toPound: 2.2046226218488e-6,
        toTonMetric: 1.0e-9,
      },
      Pound: {
        toCarat: 2267.96185,
        toCentigram: 45359.237,
        toGram: 453.59237,
        toKilogram: 0.45359237,
        toMilligram: 453592.37,
        toPound: 1.0,
        toTonMetric: 0.00045359237,
      },
      TonMetric: {
        toCarat: 5000000.0,
        toCentigram: 100000000,
        toGram: 1000000.0,
        toKilogram: 1000,
        toMilligram: 1000000000,
        toPound: 2204.6226218488,
        toTonMetric: 1.0,
      },
    };
    return massTable;
  }

  getLengthTables = () => {
    const lengthTable = {
      Centimeter: {
        toCentimeter: 1.0,
        toFoot: 0.032808398950131,
        toInch: 0.39370078740157,
        toKilometer: 1.0e-5,
        toMeter: 0.01,
        toMile: 6.2137119223733e-6,
        toYard: 0.010936132983377,
      },
      Foot: {
        toCentimeter: 30.48,
        toFoot: 1.0,
        toInch: 12,
        toKilometer: 0.0003048,
        toMeter: 0.3048,
        toMile: 0.00018939393939394,
        toYard: 0.33333333333333,
      },
      Inch: {
        toCentimeter: 2.54,
        toFoot: 0.083333333333333,
        toInch: 1.0,
        toKilometer: 2.54e-5,
        toMeter: 0.0254,
        toMile: 1.5782828282828e-5,
        toYard: 0.027777777777778,
      },
      Kilometer: {
        toCentimeter: 100000.0,
        toFoot: 3280.8398950131,
        toInch: 39370.078740157,
        toKilometer: 1.0,
        toMeter: 1000.0,
        toMile: 0.62137119223733,
        toYard: 1093.6132983377,
      },
      Meter: {
        toCentimeter: 100.0,
        toFoot: 3.2808398950131,
        toInch: 39.370078740157,
        toKilometer: 0.001,
        toMeter: 1.0,
        toMile: 0.00062137119223733,
        toYard: 1.0936132983377,
      },
      Mile: {
        toCentimeter: 160934.4,
        toFoot: 5280.0,
        toInch: 63360.0,
        toKilometer: 1.609344,
        toMeter: 1609.344,
        toMile: 1.0,
        toYard: 1760.0,
      },
      Yard: {
        toCentimeter: 91.44,
        toFoot: 3.0,
        toInch: 36,
        toKilometer: 0.0009144,
        toMeter: 0.9144,
        toMile: 0.00056818181818182,
        toYard: 1.0,
      },
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
