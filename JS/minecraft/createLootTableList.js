createLootTableList = (weight, min, max, effects, swords, prefix) => {
  let middle = ``;
  let coma = ",";

  for (let i = 0; i < swords.length; i++) {
    for (let j = 0; j < effects.length; j++) {
      coma = (i == swords.length - 1 && j == effects.length - 1) ? "" : ",";
      if (effects[j].data.regular == null) {
        middle += `{
          "type": "item",
          "weight": ${weight},
          "functions": [
            {
              "function": "set_count",
              "count": {
                "min": ${min},
                "max": ${max}
              }
            }
          ],
          "name": "s:${effects[j].effect}_${swords[i].type}_sword"
        },
        `
      };
      if (effects[j].data.long == null) {
        middle += `{
          "type": "item",
          "weight": ${weight},
          "functions": [
            {
              "function": "set_count",
              "count": {
                "min": ${min},
                "max": ${max}
              }
            }
          ],
          "name": "s:long_${effects[j].effect}_${swords[i].type}_sword"
        },
        `
      };
      if (effects[j].data.strong == null) {
        middle += `{
          "type": "item",
          "weight": ${weight},
          "functions": [
            {
              "function": "set_count",
              "count": {
                "min": ${min},
                "max": ${max}
              }
            }
          ],
          "name": "s:strong_${effects[j].effect}_${swords[i].type}_sword"
        }${coma}
        `
      }
    }  
  }

  return middle;
}
