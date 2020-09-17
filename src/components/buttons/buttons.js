class Button {
  constructor() {
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('button');
  }
}

const button = new Button();
document.body.append(button.elem);