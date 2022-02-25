createNameList = (arr, ns, prefix) => {
  let n = arr.length;
  let text = ``;

  for (let i = 0; i < n; i++) {
    text += `tile.${ns}:${prefix}_${arr[i].id}.name=${arr[i].name} ${prefix}
  `
  }

  return text;
}