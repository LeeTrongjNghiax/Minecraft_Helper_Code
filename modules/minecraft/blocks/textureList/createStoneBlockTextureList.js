createStoneBlockTextureList = (arr, stoneType) => {
  let middle = ``;

  let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     middle += `
// "${stoneType}_${arr[i].id}" : {
//   "textures" : [
//     "textures/blocks/${stoneType}s/${stoneType}_${arr[i].id}"
//   ]
// },
// `
//   }

  for (let i = 0; i < n; i++) {
    middle += `
"${stoneType}_${arr[i].id}" : {
  "sound": "stone",
  "textures" : "${stoneType}_${arr[i].id}"
},
`
  }

  return middle;
}