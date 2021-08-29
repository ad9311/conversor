class Table {
  getUnitFunctions = () => {
    const tableOfUnits = {
      Area: {Acre: 'Acre', Hectare: 'Hectare', SquareCentimeter: 'Square Centimeter',
        SquareFoot: 'Square Foot', SquareInch: 'Square Inch', SquareKilometer: 'Square Kilometer',
        SquareMeter: 'Square Meter', SquareMile: 'Square Mile', SquareYard: 'Square Yard'},
      Mass: {Carat: 'Carat', Centigram: 'Centigram', Gram: 'Gram', Kilogram: 'Kilogram',
        Miligram: 'Milogram', Pound: 'Pound', TonMetric: 'Ton(Metric)'},
      Length:{Centimeter: 'Centimeter', Foot: 'Foot', Inch: 'Inch', Kilometer: 'Kilometer',
        Meter: 'Meter', Yard: 'Yard'},
      Volume:{ CubicCentimeter: 'Cubic Centimeter', CubicFoot: 'Cubic Foot',
        CubicInch: 'Cubic Inch', CubicMeter: 'Cubic Meter', Gallon: 'Gallon',
        Liter: 'Liter', Milliliter: 'Milliliter', Ounce: 'Ounce', Tablespoon: 'Tablespoon'},
    }
    return tableOfUnits;
  }
  getUnitTable = (selection) => {
    const tableOfUnits = this.getUnitFunctions();
    const quantity = tableOfUnits[selection.quantity];
    const unit = quantity[selection.source];
    return unit;
  }
}

const table = new Table();
export default table;
