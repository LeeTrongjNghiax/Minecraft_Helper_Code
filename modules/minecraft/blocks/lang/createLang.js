createLang = (colors, block, ns) => {
  let text = "";

  for (let i = 0; i < colors.length; i++) {
    text += `tile.${ns}:${block.toLowerCase()}_${colors[i].id}.name=${colors[i].name} ${block}\n`;
  }

  return text;
}