createTerrainTextureList = (arr, prefix) => {
  let coma = (prefix[prefix.length - 1] == `s`) ? `es` : `s`;

  let middle = ``;
  let n = arr.length;
  
  for (let i = 0; i < n; i++) {
    middle += `
  "${prefix}_${arr[i].id}": { 
    "textures": [ 
      "textures/blocks/${prefix}${coma}/${prefix}_${arr[i].id}" 
    ] 
  },
    `
  }

  return middle;
}