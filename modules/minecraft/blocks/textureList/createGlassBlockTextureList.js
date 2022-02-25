createGlassBlockTextureList = arr => {
  let middle = ``;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `
"glass_${arr[i].id}" : {
  "sound" : "glass",
  "textures" : "glass_${arr[i].id}"
},
`
  }

  return middle;
}