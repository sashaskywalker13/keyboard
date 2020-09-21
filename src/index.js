import './style.scss';

import Keyboard from './components/keyboard';

const keyboard = new Keyboard();
// eslint-disable-next-line no-undef
document.body.append(keyboard.elem);
