createBookshelfRecipe = (block, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:bookshelf_${block.id}_crafted"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "WWW",
      "BBB",
      "WWW"
    ],
    "key": {
      "W": {
        "item": "${ns}:plank_${block.id}",
        "data": 0
      },
      "B": {
        "item": "minecraft:book"
      }
    },
    "result": {
      "item": "${ns}:bookshelf_${block.id}",
      "count": 1
    }
  }
}`;