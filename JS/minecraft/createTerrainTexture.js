terrainTextureGenerator = (...textureList) => {
  let begin = `{
  "resource_pack_name": "vanilla",
  "texture_name": "atlas.terrain",
  "padding": 8,
  "num_mip_levels": 4,
  "texture_data": {`;

  let middle = ``;
  for (let i of textureList)
    middle += i;

  let end = `    }
}`;

  return begin + middle + end;
}