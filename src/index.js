import quantity from './quantity.js';
import renderer from './renderer.js';
import table from "./table.js";
import input from './input.js';

function renderSelection() {
  renderer.renderSelect(quantity.getUnits());
}

function getResult() {
  const selection = input.getQuantitySource();
  const unitTable = table.getUnitTable(selection);
  console.log(unitTable);
}

window.addEventListener('load', renderSelection());
document.getElementById('quantity').addEventListener('change', () => renderSelection());
document.getElementById('convert').addEventListener('click', () => getResult());
