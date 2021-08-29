class Input {
  getQuantitySource() {
    const quantity = document.getElementById('quantity').value.replace(/[\s()]/g, '');
    const source = document.getElementById('source').value.replace(/[\s()]/g, '');
    const selection = { quantity: quantity, source: source};
    return selection;
  }

  getTarget() {
    const target = document.getElementById('target').value;
    return target;
  }
}

const input = new Input();
export default input;
