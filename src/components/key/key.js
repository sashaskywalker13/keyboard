import './key.scss';

const key = (button) => {
  const keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard__key');
  keyboardKey.textContent = button;
  switch (button) {
    case 'backspace':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'backspace');
      break;
    case 'caps':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'caps');
      break;
    case 'enter':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'enter');
      break;
    case 'done':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'done');
      break;
    case 'space':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'space');
      break;
    case 'ru':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'ru');
      break;
    case 'en':
      keyboardKey.classList.add('keyboard__key--wide');
      keyboardKey.setAttribute('data-value', 'en');
      break;
    default:
      break;
  }
  return keyboardKey;
};

export default key;
