createConcreteRecipe = (block, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:concrete_${block.id}_crafted"
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
        "item": "minecraft:concrete",
        "data": 0
      },
      "D": {
        "item": "${ns}:dye_powder_${block.id}"
      }
    },
    "result": {
      "item": "${ns}:concrete_${block.id}",
      "count": 8
    }
  }
}`;