class Input {
  getQuantitySource = () => {
    const quantity = document.getElementById('quantity').value.replace(/[\s()]/g, '');
    const source = document.getElementById('source').value.replace(/[\s()]/g, '');
    const selection = { quantity, source };
    return selection;
  }

  getTarget = () => {
    const target = document.getElementById('target').value.replace(/[\s()]/g, '');
    return target;
  }

  getUserInput = () => {
    const userInput = document.getElementById('input').value;
    return userInput;
  }
}

const input = new Input();
export default input;
