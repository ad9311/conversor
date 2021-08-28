class Renderer {
  clearSelect() {
    document.getElementById('source').innerHTML = '';
    document.getElementById('target').innerHTML = '';
  }

  appendOption(id, unit) {
    const selectTag = document.getElementById(id);
    const option = document.createElement('option');
    option.value = unit;
    option.innerHTML = unit;
    selectTag.appendChild(option);
  }
  renderSelect(units) {
    this.clearSelect();
    const selection = document.getElementById('quantities').value;
    units[selection].forEach(unit => {
      this.appendOption('source', unit);
      this.appendOption('target', unit);
    });
  }
}

const renderer = new Renderer();
export default renderer;
