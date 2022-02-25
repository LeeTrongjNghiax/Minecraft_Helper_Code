createGiveFunction = (begin, end) => {
  let text = ``;

  for (let i = begin; i <= end; i++) {
    text += `give @p s:sword_${i} 64
    `;
  }

  return text;
}