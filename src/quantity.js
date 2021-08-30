class Quantity {
  getUnits = () => {
    const units = {
      Area: [
        'Acre',
        'Hectare',
        'Square Centimeter',
        'Square Foot',
        'Square Inch',
        'Square Kilometer',
        'Square Meter',
        'Square Mile',
        'Square Yard',
      ],
      Mass: [
        'Carat',
        'Centigram',
        'Gram',
        'Kilogram',
        'Milligram',
        'Pound',
        'Ton(Metric)',
      ],
      Length: [
        'Centimeter',
        'Foot',
        'Inch',
        'Kilometer',
        'Meter',
        'Mile',
        'Yard',
      ],
      Temperature: [
        'Celsius',
        'Fahrenheit',
        'Kelvin',
        'Rankine',
      ],
      Volume: [
        'Cubic Centimeter',
        'Cubic Foot',
        'Cubic Inch',
        'Cubic Meter',
        'Gallon',
        'Liter',
        'Milliliter',
        'Ounce',
        'Tablespoon',
      ],
    };
    return units;
  };
}

const quantity = new Quantity();
export default quantity;
