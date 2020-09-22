import './key.scss';

import {
  BACKSPACE,
  SYMBOLS,
  CAPSLOCK,
  ENTER,
  BACK,
  DONE,
  SPACE,
  RU,
  EN,
} from '../../lib/constants';

const key = (button) => {
  // eslint-disable-next-line no-undef
  const keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard__key');
  keyboardKey.textContent = button;
  keyboardKey.setAttribute('value', button);
  switch (button) {
    case BACKSPACE:
      keyboardKey.classList.add('keyboard__key--wide');
      break;
    case SYMBOLS:
      keyboardKey.classList.add('keyboard__key--wide');
      break;
    case CAPSLOCK:
      keyboardKey.classList.add('keyboard__key--wide');
      break;
    case ENTER:
      keyboardKey.classList.add('keyboard__key--enter');
      break;
    case BACK:
      keyboardKey.classList.add('keyboard__key--wide');
      break;
    case DONE:
      keyboardKey.classList.add('keyboard__key--wide');
      break;
    case SPACE:
      keyboardKey.classList.add('keyboard__key--space');
      break;
    case RU:
      keyboardKey.classList.add('keyboard__key--lang');
      break;
    case EN:
      keyboardKey.classList.add('keyboard__key--lang');
      break;
    default:
      break;
  }
  return keyboardKey;
};

export default key;
