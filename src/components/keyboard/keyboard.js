import Textarea from '../textarea';
import Body from '../body';

class Keyboard {
  constructor() {
    this.keyboardTextarea = new Textarea();
    this.keyboardBody = new Body();
    this.render();
    this.elem.addEventListener('click', (e) => this.onClick(e));
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('keyboard');
    this.elem.insertAdjacentElement('afterbegin', this.keyboardTextarea.elem);
    this.elem.insertAdjacentElement('beforeend', this.keyboardBody.elem);
  }

  onClick(e) {
    if (e.target.classList.contains('keyboard__key')) {
      if (e.target.dataset.value === 'ru') {
        this.keyboardBody.changeLang('ru');
        return;
      }
      if (e.target.dataset.value === 'en') {
        this.keyboardBody.changeLang('en');
        return;
      }
      if (e.target.dataset.value === 'backspace') {
        this.keyboardTextarea.deleteText();
        return;
      }
      this.keyboardTextarea.elem.value += e.target.textContent;
    }
  }
}

export default Keyboard;
