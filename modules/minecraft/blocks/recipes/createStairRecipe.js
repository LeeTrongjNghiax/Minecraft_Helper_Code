createStairRecipe = (block, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:stair_${block.id}_crafted"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "B  ",
      "BB ",
      "BBB"
    ],
    "key": {
      "B": {
        "item": "${ns}:plank_${block.id}",
        "data": 0
      }
    },
    "result": {
      "item": "${ns}:stair_${block.id}",
      "count": 4
    }
  }
}`