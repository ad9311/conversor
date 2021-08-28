import quantity from './quantity.js';
import renderer from './renderer.js';

function renderSelection() {
  renderer.renderSelect(quantity.getUnits());
}

window.addEventListener('load', renderSelection());
document.getElementById('quantities').addEventListener('change', () => renderSelection());
