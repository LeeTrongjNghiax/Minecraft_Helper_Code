createBookshelfBlockTextureList = arr => {
  let middle = ``;

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `   
"bookshelf_${arr[i].id}" : {
  "sound" : "wood",
  "textures" : {
    "down" : "plank_${arr[i].id}",
    "side" : "bookshelf_${arr[i].id}",
    "up" : "plank_${arr[i].id}"
  }
},
`
  }

  return middle;
}