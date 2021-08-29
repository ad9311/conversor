import quantity from './quantity.js';
import renderer from './renderer.js';
import table from './table.js';
import input from './input.js';
import conversion from './conversion.js';

function renderSelection() {
  renderer.renderSelect(quantity.getUnits());
}

function getResult() {
  const quantityTable = table.getQuantityTable(input.getQuantitySource());
  const result = conversion.newConversion(quantityTable, input.getUserInput(), input.getTarget());
  renderer.renderResult(result);
}

window.addEventListener('load', renderSelection());
document.getElementById('quantity').addEventListener('change', () => renderSelection());
document.getElementById('convert').addEventListener('click', () => getResult());
