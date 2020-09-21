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
      keyboardKey.setAttribute('data-value', BACKSPACE);
      break;
    case SYMBOLS:
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', SYMBOLS);
      break;
    case CAPSLOCK:
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', CAPSLOCK);
      break;
    case ENTER:
      keyboardKey.classList.add('keyboard__key--enter');
      keyboardKey.setAttribute('data-value', ENTER);
      break;
    case BACK:
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', BACK);
      break;
    case DONE:
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', DONE);
      break;
    case SPACE:
      keyboardKey.classList.add('keyboard__key--space');
      keyboardKey.setAttribute('data-value', SPACE);
      break;
    case RU:
      keyboardKey.classList.add('keyboard__key--lang');
      keyboardKey.setAttribute('data-value', RU);
      break;
    case EN:
      keyboardKey.classList.add('keyboard__key--lang');
      keyboardKey.setAttribute('data-value', EN);
      break;
    default:
      break;
  }
  return keyboardKey;
};

export default key;
