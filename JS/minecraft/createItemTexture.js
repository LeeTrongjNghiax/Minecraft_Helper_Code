createItemTexture = (...textureList) => {
  let begin = `{
    "resource_pack_name": "vanilla",
    "texture_name": "atlas.items",
    "texture_data": {`;

  let middle = ``;
  for (let i of textureList)
    middle += i;

  let end = `    }
}`;

  return begin + middle + end;
}