import './keyboardTextarea.scss';

class Textarea {
  constructor() {
    this.render();
    this.elem.addEventListener('blur', (e) => this.onBlur(e));
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('textarea');
    this.elem.classList.add('keyboard__textarea');
  }

  onBlur(e) {
    this.coursorPosition = e.target.selectionStart;
  }

  deleteLetter() {
    if (this.coursorPosition) {
      const textareaText = this.elem.value.split('');
      textareaText.splice(this.coursorPosition - 1, 1);
      this.elem.value = textareaText.join('');
      this.elem.setSelectionRange(this.coursorPosition - 1, this.coursorPosition - 1);
    }
  }

  addLetter(letter) {
    this.elem.setRangeText(letter, this.coursorPosition, this.coursorPosition, 'end');
  }
}

export default Textarea;
