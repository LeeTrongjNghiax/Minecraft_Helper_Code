createBlockTexture = (...blockTextureList) => {
  let middle = ``;
  for (let i of blockTextureList) 
    middle += i;

  return `{\n` + middle + `}`;
}