createDyeTextureList = (arr) => {
  let begin = `
{
  "resource_pack_name": "vanilla",
  "texture_name": "atlas.items",
  "texture_data": {`;

  let middle = ``;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    middle += `
    "concrete_${arr[i].id}": { 
      "textures": [ 
        "textures/blocks/concretes/concrete_${arr[i].id}" 
      ] 
    },
    `
  }

  let end = `    
  }
}`;

  return begin + middle + end;
}