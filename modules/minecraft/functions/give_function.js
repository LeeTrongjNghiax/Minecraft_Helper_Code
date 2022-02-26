giveFunction = (colors, ns, blockType, index) => {
  let text = ``;

  let min = 36 * (index - 1);
  let max = (index < 5) ? 36 * index - 1 : 147;

  for (let i = min ; i <= max; i++) {
    text += `give @p ${ns}:${blockType}_${colors[i].id} 36\n`
  }

  return text
}