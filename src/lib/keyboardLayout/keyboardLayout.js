const getDefaultLayout = () => ({
  EN: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace',
    'CapsLock', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter',
    'Done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Symbols', 'Space', 'RU',
  ],
  RU: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace',
    'CapsLock', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з',
    'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'Enter',
    'Done', 'л', 'д', 'ж', 'э', 'ё', 'я', 'ч', 'с', 'м', 'и',
    'т', 'ь', 'б', 'ю', 'Symbols', 'Space', 'EN',
  ],
  Symbols: [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_',
    '-', '=', '+', '[', ']', '{', '}', ';', ':', '"',
    '|', '/', ',', '.', '?', '~', 'Back',
  ],
});

export default getDefaultLayout;
