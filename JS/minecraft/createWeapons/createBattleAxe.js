createBattleAxeJson = axe => `{
	"format_version": 1.16,
	"minecraft:item": {
		"description": {
			"identifier": "nw:nw_${axe.material}_${axe.id}",
			"category": "equipment"
		},
		"components": {
			"minecraft:allow_off_hand": true,
			"minecraft:can_destroy_in_creative": false,
			"minecraft:creative_category": {
				"parent": "itemGroup.name.axe"
			},
			"minecraft:damage": ${axe.damage},
			"minecraft:damageable": {
				"max_damage": 10,
				"repair_items": [
					"nw:nw_${axe.material}_${axe.id}"
				]
			},
			"minecraft:digger": {
				"use_efficiency": true,
				"destroy_speeds": [
					{
						"block": "minecraft:note_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:attached_melon_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:attached_pumpkin_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:azalea",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bamboo",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:barrel",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bee_nest",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:beehive",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:beetroots",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:big_dripleaf_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:big_dripleaf",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bookshelf",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brown_mushroom_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brown_mushroom",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:campfire",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:carrots",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cartography_table",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:carved_pumpkin",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cave_vines_plant",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cave_vines",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chest",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chorus_flower",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chorus_plant",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cocoa",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:composter",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:crafting_table",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:crimson_fungus",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:daylight_detector",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_bush",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:fern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:fletching_table",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:glow_lichen",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:grass",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:hanging_roots",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:jack_o_lantern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:jukebox",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:ladder",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:large_fern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lectern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lily_pad",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:loom",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:melon_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:melon",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mushroom_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_wart",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:potatoes",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pumpkin_stem",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pumpkin",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_mushroom_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_mushroom",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:scaffolding",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:small_dripleaf",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smithing_table",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:soul_campfire",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:spore_blossom",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sugar_cane",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sweet_berry_bush",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:tall_grass",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:trapped_chest",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:twisting_vines_plant",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:twisting_vines",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:vine",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:warped_fungus",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weeping_vines_plant",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weeping_vines",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wheat",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:banners",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:fence_gates",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:flowers",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:logs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:planks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:saplings",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:signs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_buttons",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_doors",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_fences",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_pressure_plates",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_slabs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:wooden_trapdoors",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					}
				],
				"on_dig": {
					"event": "break2"
				}
			},
			"minecraft:display_name": {
				"value": "${axe.name}"
			},
			"minecraft:durability": {
				"max_durability": ${axe.durability}
			},
			"minecraft:enchantable": {
				"value": 1,
				"slot": "axe"
			},
			"minecraft:hand_equipped": true,
			"minecraft:icon": {
				"texture": "nw_${axe.material}_${axe.id}"
			},                     
			"minecraft:max_stack_size": 1,
			"minecraft:mining_speed": 1,
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
					"event": "break2"
				}
			},
			"tag:minecraft:is_axe": {}
		},
		"events": {
			"break1": {
				"damage": {
					"type": "durability",
					"amount": 1,
					"target": "self"
				}
			},
			"break2": {
				"damage": {
					"type": "durability",
					"amount": 2,
					"target": "self"
				},
				"add_mob_effect": {
					"effect": "${axe.effect_id}",
					"target": "other",
					"duration": ${axe.effect_duration},
					"amplifier": ${axe.effect_level}
				}
			}
		}
	}
}`