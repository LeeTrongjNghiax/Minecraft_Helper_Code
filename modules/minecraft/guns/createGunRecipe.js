createGunRecipe = (gun, ns) => `{
  "format_version": "1.16.100",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "${ns}:${gun.id}_crafted"
    },
    "tags": [ "crafting_table" ],
    "pattern": [
      "B",
      "A"
    ],
    "key": {
      "A": {
        "item": "${ns}:${gun.magazine}"
      },
      "B": {
        "item": "${ns}:${gun.id}",
        "data": 0
      }
    },
    "result": [
      { 
        "item": "${ns}:${gun.id}",
        "data": ${gun.capacity}
      }
    ]
  }
}`;