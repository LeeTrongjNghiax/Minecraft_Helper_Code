encodeText = (text) => {
  let alphabet = `:ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz`

  let text2 = ``;
  let i = 0;

  while (i < text.length) {
    if (alphabet.indexOf(text[i], 0) != -1) {
      switch (text[i]) {
        case `:`: {
          text2 += (text[i - 1] == `"`) ? text[i] : `\\u00${text.charCodeAt(i).toString(16)}`;
          i++;
          break;
        }
        case `0`:
        case `1`:
        case `2`:
        case `3`:
        case `4`:
        case `5`:
        case `6`:
        case `7`:
        case `8`:
        case `9`: {
          text2 += (text[i - 1] == `"`) ? text[i] : `\\u00${text.charCodeAt(i).toString(16)}`;
          i++;
          break;
        }
        case 't':
          if (text[i + 1] == 'r' && text[i + 2] == 'u' && text[i + 3] == 'e' && text[i + 4] != '"') {
            text2 += 'true';
            i += 4;
          } else {
            text2 += `\\u00${text.charCodeAt(i).toString(16)}`;
            i++;
          };
          
          break;
        case 'f':
          if (text[i + 1] == 'a' && text[i + 2] == 'l' && text[i + 3] == 's' && text[i + 4] == 'e' && text[i + 5] != '"') {
            text2 += 'false';
            i += 5;
          } else {
            text2 += `\\u00${text.charCodeAt(i).toString(16)}`;
            i++;
          }
          
          break;
        default: {
          text2 += `\\u00${text.charCodeAt(i).toString(16)}`;
          i++;
        }
      }
    } else {
      text2 += text[i];
      i++;
    } 
  }

  return text2;
}

deleteSpace = (text) => text.replace(/\s/g, ``);

obfuscator = (text) => encodeText(deleteSpace(text));