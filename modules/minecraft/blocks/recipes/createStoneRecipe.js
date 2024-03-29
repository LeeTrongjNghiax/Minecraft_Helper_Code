createStoneRecipe = (block, ns, stone, id) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:${stone}_${block.id}_crafted"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "WWW",
      "WDW",
      "WWW"
    ],
    "key": {
      "W": {
        "item": "minecraft:${stone}",
        "data": ${id}
      },
      "D": {
        "item": "${ns}:dye_powder_${block.id}"
      }
    },
    "result": {
      "item": "${ns}:${stoneType}_${block.id}",
      "count": 8
    }
  }
}`;