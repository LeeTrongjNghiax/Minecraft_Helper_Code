createSwordRecipe = (sword, effect, prefix, id) => {
  return `{
	"format_version": "1.12.0",
	"minecraft:recipe_shapeless": {
		"description": {
			"identifier": "s:${prefix}${effect.effect}_${sword.type}_sword_crafted"
		},
    "tags": [
			"crafting_table"
		],
		"priority": 0,
		"ingredients": [
      {
        "item": "minecraft:slime_ball",
        "data": 0,
        "count": 1
      },
      {
        "item": "minecraft:potion",
        "data": ${id},
        "count": 1
      },
      {
        "item": "minecraft:${sword.type}_sword",
        "data": 0,
        "count": 1
      }
    ],
		"result": {
			"item": "s:${prefix}${effect.effect}_${sword.type}_sword",
			"data": 0
		}
	}
}`
}