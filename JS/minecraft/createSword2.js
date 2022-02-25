creatSword2Json = (sword, effect, long, strong, prefix, typeName) => {

	return `{
	"format_version": "1.16.100",
	"minecraft:item": {
		"description": {
			"identifier": "s:${name}",
			"category": "equipment"
		},
		"components": {
			"minecraft:allow_off_hand": true,
			"minecraft:can_destroy_in_creative": false,
			"minecraft:creative_category": {
				"parent": "itemGroup.name.sword"
			},
			"minecraft:damage": ${sword.damage},
			"minecraft:damageable": {
				"max_damage": ${getRandFloat(damaged.min, damaged.max)}
			},
			"minecraft:digger": {
				"use_efficiency": true,
				"destroy_speeds": [
					{
						"block": "minecraft:web",
						"speed": 10,
						"on_dig": {
							"event": "on_dig"
						}
					},
					{
						"block": "minecraft:bamboo",
						"speed": 10,
						"on_dig": {
							"event": "on_dig"
						}
					}
				],
				"on_dig": {
					"event": "on_dig"
				}
			},
			"minecraft:display_name": {
				"value": "${typeName}${effect.name} ${sword.name} Sword"
			},
			"minecraft:durability": {
				"max_durability": ${sword.durability}
			},
			"minecraft:enchantable": {
				"value": 1,
				"slot": "sword"
			},
			"minecraft:hand_equipped": true,
			"minecraft:icon": {
				"texture": "${prefix}${effect.effect}_${sword.type}_sword"
			},
			"minecraft:max_stack_size": 1,
			"minecraft:mining_speed": 5,
			"minecraft:repairable": {
				"repair_items": [
					{
						"repair_amount": 25
					}
				]
			},
			"minecraft:stacked_by_data": false,
			"minecraft:weapon": {
				"on_hit_block": {
					"event": "on_dig"
				},
				"on_hurt_entity": {
					"event": "on_hurt_entity"
				}
			}
		},
		"events": {
      "on_dig": {
				"damage": {
					"type": "durability",
					"amount": 2,
					"target": "self"
				}
			},
      "on_hurt_entity": {
				"sequence": [
					{
						"damage": {
							"type": "durability",
							"amount": 1,
							"target": "self"
						}
					},
					{
						"add_mob_effect": {
							"effect": "${effect.effect}",
							"target": "${target}",
							"duration": ${long},
							"amplifier": ${strong}
						}
					}
				]
      }
		}
	}
}`
}