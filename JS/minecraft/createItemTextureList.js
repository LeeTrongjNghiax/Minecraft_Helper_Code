createItemTextureList = (effects, swords) => {
  let middle = ``;
  let coma = ",";

  console.log(effects);
  for (let i = 0; i < swords.length; i++) {
    for (let j = 0; j < effects.length; j++) {
      coma = (i == swords.length - 1 && j == effects.length - 1) ? "" : ",";
      middle += `
      "${effects[j].effect}_${swords[i].type}_sword": {
        "textures": "textures/items/${swords[i].type}/${effects[j].effect}_${swords[i].type}_sword"
      },
      `

      middle += `
      "long_${effects[j].effect}_${swords[i].type}_sword": {
        "textures": "textures/items/${swords[i].type}/long_${effects[j].effect}_${swords[i].type}_sword"
      },
      `

      middle += `
      "strong_${effects[j].effect}_${swords[i].type}_sword": {
        "textures": "textures/items/${swords[i].type}/strong_${effects[j].effect}_${swords[i].type}_sword"
      }${coma}
      `
    }
  }

  return middle;
}