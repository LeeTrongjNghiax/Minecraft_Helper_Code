createStoneBlockTextureList = (arr, stoneType) => {
  let middle = ``;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `
"${stoneType}_${arr[i].id}" : {
  "sound" : "wood",
  "textures" : "${stoneType}_${arr[i].id}"
},
`
  }

  return middle;
}