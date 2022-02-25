dyeTradingGenerator = (arr, ns) => {
  let begin = `
{
  "tiers": [
    {
      "groups": [
        {
          "num_to_select": 140,
          "trades": [
            `;

  let coma = `,`;
  let middle = ``;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    coma = (i == n) ? `` : `,`;
    middle += `
            {
              "max_uses": 1000,
              "wants": [
                {
                  "item": "minecraft:emerald",
                  "quantity": 1
                }
              ],
              "gives": [
                {
                  "item": "${ns}:dye_powder_${arr[i].id}",
                  "quantity": 64
                }
              ]
            }${coma}
            `;
  }

  let end = `
          ]
        },
      ]
    }
  ]
}`;

  return begin + middle + end;
}