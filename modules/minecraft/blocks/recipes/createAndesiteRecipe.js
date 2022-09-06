createAndesiteRecipe = (block, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:andesite_${block.id}_crafted"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "AAA",
      "ADA",
      "AAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:stone",
        "data": 5
      },
      "D": {
        "item": "${ns}:dye_powder_${block.id}"
      }
    },
    "result": {
      "item": "${ns}:andesite_${block.id}",
      "count": 1
    }
  }
}`;