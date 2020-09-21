import './keyboardBody.scss';

import { EN } from '../../lib/constants';

import keyboardLayout from '../../lib/keyboardLayout';
import key from '../key';

class Body {
  constructor() {
    this.language = EN;
    this.caps = false;
    this.buttonsContainer = keyboardLayout();
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('keyboard__body');
    this.renderKeys();
  }

  changeLang(language) {
    this.language = language;
    this.renderKeys();
  }

  renderKeys() {
    this.elem.innerHTML = '';
    this.buttonsContainer[this.language].forEach((element) => {
      const elementKey = (element.length > 1) ? element : this.changeReg(element);
      this.elem.insertAdjacentElement('beforeend', key(elementKey));
    });
  }

  onCaps() {
    this.caps = !this.caps;
    this.renderKeys();
  }

  changeReg(element) {
    return this.caps ? element.toUpperCase() : element.toLowerCase();
  }

  activeKey(keyCode) {
    const activeKey = this.elem.querySelector(`.keyboard__key[value="${keyCode}"]`);
    activeKey.classList.add('keyboard__key--active');
  }

  disableKey(keyCode) {
    const activeKey = this.elem.querySelector(`.keyboard__key[value="${keyCode}"]`);
    activeKey.classList.remove('keyboard__key--active');
  }
}

export default Body;
