import './textarea.scss';

class Textarea {
  constructor() {
    this.render();
    this.elem.addEventListener('blur', (e) => this.onBlur(e));
  }

  render() {
    this.elem = document.createElement('textarea');
    this.elem.classList.add('keyboard__textarea');
  }

  onBlur(e) {
    this.coursorPosition = e.target.selectionStart - 1;
  }

  deleteText() {
    const textareaText = this.elem.value.split('');
    textareaText.splice(this.coursorPosition, 1);
    this.elem.value = textareaText.join('');
    this.elem.setSelectionRange(this.coursorPosition, this.coursorPosition);
  }
}

export default Textarea;
