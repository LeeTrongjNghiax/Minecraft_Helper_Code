createLootTable = (min, max, ...lootTableList) => {
  let begin = `{
    "pools": [
      {
        "rolls": {
          "min": ${min},
          "max": ${max}
        },
        "entries": [
          `;

  let middle = ``;

  for (let i of lootTableList) 
    middle += i;

  let end = `      
      ]
    }
  ]
}`;

  return begin + middle + end;
}
