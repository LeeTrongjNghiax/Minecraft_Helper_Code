createItemTextureList = (arr) => {

  let begin = `{
"texture_name": "atlas.items",
"texture_data": {
`;

  let middle = '';

  let comma = `,`;

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    comma = (i == n - 1) ? `` : `,`;

    middle += `"${arr[i].id}": {
  "textures": [
    "textures/items/${arr[i].type}/${arr[i].id}"
  ]
}${comma}
`;
  }

  let end = `}
}`

  return begin + middle + end;
}