createGunLootTable = (arr, ns) => {
  
  let weight;
  let text = ``;
  let comma = `,`;

  for (let i = 0; i < arr.length; i++) {
    ưeight = 1;

    comma = (i == arr.length) ? `` : `,`;

    text += `
  {
    "type": "item",
    "name": "${ns}:${arr[i].id}",
    "weight": ${weight},
    "functions": [
      {
        "function": "set_data",
        "data": ${Math.round(Math.random() * arr[i].capacity)}
      }
    ]
  }${comma}`;
  }

  return text;
}