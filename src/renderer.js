class Renderer {
  cleanId = (id, unit) => {
    const formatedUnit = unit.replace(/[\s()]/g, '');
    const cleanId = `${id}-${formatedUnit.toLowerCase()}`;
    return cleanId;
  }

  switchOption = () => {
    const sourceValue = document.getElementById('source').value;
    const targetValue = document.getElementById('target').value;
    document.getElementById(this.cleanId('source', sourceValue)).selected = false;
    document.getElementById(this.cleanId('target', targetValue)).selected = false;
    document.getElementById(this.cleanId('target', sourceValue)).selected = true;
    document.getElementById(this.cleanId('source', targetValue)).selected = true;
  }

  clearSelect = () => {
    document.getElementById('source').innerHTML = '';
    document.getElementById('target').innerHTML = '';
  }

  appendOption(id, unit) {
    const selectTag = document.getElementById(id);
    const option = document.createElement('option');
    option.value = unit;
    option.innerHTML = unit;
    option.id = this.cleanId(id, unit);
    selectTag.appendChild(option);
  }

  renderSelect(units) {
    this.clearSelect();
    const selection = document.getElementById('quantity').value;
    units[selection].forEach((unit) => {
      this.appendOption('source', unit);
      this.appendOption('target', unit);
    });
  }

  renderResult = (result) => {
    document.getElementById('result').innerHTML = result;
  }
}

const renderer = new Renderer();
export default renderer;
