createGlassRecipe = (block, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:glass_${block.id}_crafted"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "GGG",
      "GDG",
      "GGG"
    ],
    "key": {
      "G": {
        "item": "minecraft:glass",
        "data": 0
      },
      "D": {
        "item": "${ns}:dye_powder_${block.id}"
      }
    },
    "result": {
      "item": "${ns}:glass_${block.id}",
      "count": 8
    }
  }
}`