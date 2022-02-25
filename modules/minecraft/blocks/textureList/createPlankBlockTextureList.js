createPlankBlockTextureList = arr => {
  let middle = ``;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `
"plank_${arr[i].id}" : {
  "sound" : "wood",
  "textures" : "plank_${arr[i].id}"
},
`
  }

  return middle;
}