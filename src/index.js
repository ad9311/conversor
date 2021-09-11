import './style.css';
import quantity from './quantity.js';
import renderer from './renderer.js';
import table from './table.js';
import input from './input.js';
import conversion from './conversion.js';

function renderSelection() {
  renderer.renderSelect(quantity.getUnits());
}

function getResult() {
  if (document.getElementById('input').value !== '') {
    const quantityTable = table.getQuantityTable(input.getQuantitySource());
    const result = conversion.newConversion(quantityTable, input.getUserInput(), input.getTarget());
    renderer.renderResult(result);
  }
}

function switchSelection() {
  renderer.switchOption();
  getResult();
}

const sourceTarget = ['source', 'target'];

window.addEventListener('load', renderSelection());
document.getElementById('quantity').addEventListener('change', () => renderSelection());
document.getElementById('input').addEventListener('input', () => getResult());
document.getElementById('switch').addEventListener('click', () => switchSelection());
sourceTarget.forEach((id) => {
  document.getElementById(id).addEventListener('change', () => getResult());
});
