import Textarea from '../keyboardTextarea';
import Body from '../keyboardBody';

import {
  RU,
  EN,
  BACKSPACE,
  SYMBOLS,
  BACK,
  CAPSLOCK,
  ENTER,
  SPACE,
  DONE,
} from '../../lib/constants';

class Keyboard {
  constructor() {
    this.keyboardTextarea = new Textarea();
    this.keyboardBody = new Body();
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('keyboard');
    this.elem.insertAdjacentElement('afterbegin', this.keyboardTextarea.elem);
    this.elem.insertAdjacentElement('beforeend', this.keyboardBody.elem);
  }

  onClick({ target }) {
    if (target.classList.contains('keyboard__key')) {
      if (target.value === RU) {
        this.keyboardBody.changeLang(RU);
        return;
      }
      if (target.value === EN) {
        this.keyboardBody.changeLang(EN);
        return;
      }
      if (target.value === BACKSPACE) {
        this.keyboardTextarea.deleteLetter();
        return;
      }
      if (target.value === SYMBOLS) {
        this.keyboardBody.changeLang(SYMBOLS);
        return;
      }
      if (target.value === BACK) {
        this.keyboardBody.changeLang(EN);
        return;
      }
      if (target.value === CAPSLOCK) {
        this.keyboardBody.onCaps();
        return;
      }
      if (target.value === ENTER) {
        this.keyboardTextarea.addLetter('\n');
        return;
      }
      if (target.value === SPACE) {
        this.keyboardTextarea.addLetter(' ');
        return;
      }
      if (target.value === DONE) {
        this.elem.classList.add('keyboard--hidden');
        return;
      }
      this.keyboardTextarea.addLetter(target.textContent);
    }
  }

  onKeydown({ key, code }) {
    if (key === CAPSLOCK) {
      this.keyboardBody.onCaps();
      this.keyboardBody.activeKey(key);
      return;
    }
    if (code === SPACE) {
      this.keyboardBody.activeKey(code);
      return;
    }
    this.keyboardBody.activeKey(key);
  }

  onKeyUp({ key, code }) {
    if (key === CAPSLOCK) {
      this.keyboardBody.onCaps();
      this.keyboardBody.disableKey(code);
      return;
    }
    if (code === SPACE) {
      this.keyboardBody.disableKey(code);
      return;
    }
    this.keyboardBody.disableKey(key);
  }

  onFocus() {
    this.elem.classList.remove('keyboard--hidden');
  }

  addEventListeners() {
    this.elem.addEventListener('click', (e) => this.onClick(e));
    this.elem.addEventListener('keydown', (e) => this.onKeydown(e));
    this.elem.addEventListener('keyup', (e) => this.onKeyUp(e));
    this.keyboardTextarea.elem.addEventListener('focus', (e) => this.onFocus(e));
  }
}

export default Keyboard;
