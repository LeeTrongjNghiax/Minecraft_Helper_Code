createGunFunction = (arr, ns) => {
  let n = arr.length;
  let text = ``;

  for (let i = 0; i < n; i++) {
    text += `give @p ${ns}:${arr[i].id} 1 ${arr[i].capacity}\n`
  }

  return text;
}