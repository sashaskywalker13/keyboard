import './body.scss';

import keyboardLayout from '../keyboardLayout';
import key from '../key';

class Body {
  constructor() {
    this.buttonsContainer = keyboardLayout();
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('keyboard__body');
    this.buttonsContainer.en.forEach((button) => {
      this.elem.insertAdjacentElement('beforeend', key(button));
    });
  }

  changeLang(lang) {
    this.elem.innerHTML = '';
    this.buttonsContainer[lang].forEach((button) => {
      this.elem.insertAdjacentElement('beforeend', key(button));
    });
  }
}

export default Body;
