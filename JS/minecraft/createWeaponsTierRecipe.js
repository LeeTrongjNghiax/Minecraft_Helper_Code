createWeaponsTierRecipe = (weapon, materialBefore) => `{
	"format_version": "1.12.0",
	"minecraft:recipe_shapeless": {
		"description": {
			"identifier": "nw:nw_${weapon.material}_${weapon.id}_craft"
		},
    "tags": [
			"crafting_table"
		],
		"priority": 0,
		"ingredients": [
      {
        "item": "nw:nw_${materialBefore}_${weapon.id}",
        "data": 0,
        "count": 1
      },
      {
        "item": "nw:nw_${materialBefore}_${weapon.id}",
        "data": 0,
        "count": 1
      }
    ],
		"result": {
			"item": "nw:nw_${weapon.material}_${weapon.id}",
			"data": 0
		}
	}
}`