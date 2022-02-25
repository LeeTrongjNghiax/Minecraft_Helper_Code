createConcreteBlockTextureList = arr => {
  let middle = ``;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `
"concrete_${arr[i].id}" : {
  "sound" : "concrete",
  "textures" : "concrete_${arr[i].id}"
},
`
  }

  return middle;
}