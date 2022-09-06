createSpearJson = axe => `{
	"format_version": "1.10",
	"minecraft:item": {
		"description": {
			"identifier": "nw:nw_${axe.material}_${axe.id}",
			"category": "equipment"
		},
		"components": {
			"minecraft:allow_off_hand": true,
			"minecraft:can_destroy_in_creative": false,
			"minecraft:creative_category": {
				"parent": "itemGroup.name.sword"
			},
			"minecraft:damage": ${axe.damage},
			"minecraft:damageable": {
				"max_damage": 35,
				"repair_items": [
					"nw:nw_${axe.material}_${axe.id}"
				]
			},
			"minecraft:digger": {
				"use_efficiency": true,
				"destroy_speeds": [
					{
						"block": "minecraft:web",
						"speed": 15
					},
					{
						"block": "minecraft:bamboo",
						"speed": 10
					}
				]
			},
			"minecraft:display_name": {
				"value": "${axe.name}"
			},
			"minecraft:durability": {
				"max_durability": ${axe.durability}
			},
			"minecraft:enchantable": {
				"value": 1,
				"slot": "sword"
			},
			"minecraft:hand_equipped": true,
			"minecraft:icon": {
				"texture": "nw_${axe.material}_${axe.id}"
			},
			"minecraft:max_stack_size": 1,
			"minecraft:mining_speed": 1.5,
			"minecraft:render_offsets": {
				"main_hand": {
					"first_person": {
						"position": [1, -0.25, -2]
					},
					"third_person": {
						"position": [0.2, 0.85, -0.66],
						"scale": [0.05, 0.05, 0.05]
					}
				},
				"off_hand": {
					"first_person": {
						"position": [-2, 0.5, -1]
					},
					"third_person": {
						"position": [0.2, 0.85, -0.66],
						"scale": [0.05, 0.05, 0.05]
					}
				}
			},
			"minecraft:repairable": {
				"repair_items": [
					{
						"items": [
							"nw:nw_${axe.material}_${axe.id}"
						],
						"repair_amount": 10
					}
				]
			},
			"minecraft:stacked_by_data": false,
			"minecraft:weapon": {
				"on_hurt_entity": {
					"event": "break1"
				}
			}
		},
		"events": {
			"break1": {
				"damage": {
					"type": "durability",
					"amount": 1,
					"target": "self"
				},
				"add_mob_effect": {
					"effect": "${axe.effect_id}",
					"target": "other",
					"duration": ${axe.effect_duration},
					"amplifier": ${axe.effect_level}
				}
			},
			"break2": {
				"damage": {
					"type": "durability",
					"amount": 2,
					"target": "self"
				}
			}
		}
	}
}`