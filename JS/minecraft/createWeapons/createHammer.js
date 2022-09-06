createHammerJson = axe => `{
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
				"parent": "itemGroup.name.pickaxe"
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
						"block": "minecraft:stone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:granite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_granite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:diorite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_diorite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:andesite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_andesite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobblestone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gold_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_gold_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:iron_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_iron_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:coal_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_coal_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_gold_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lapis_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_lapis_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lapis_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dispenser",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gold_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:iron_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_cobblestone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:obsidian",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:spawner",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:diamond_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_diamond_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:diamond_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:furnace",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobblestone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_pressure_plate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:iron_door",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:redstone_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_redstone_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:netherrack",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:basalt",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_basalt",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cracked_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:iron_bars",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chain",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_brick_fence",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:enchanting_table",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brewing_stand",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:end_stone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sandstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:emerald_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_emerald_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:ender_chest",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:emerald_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_weighted_pressure_plate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:heavy_weighted_pressure_plate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:redstone_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_quartz_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:hopper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:quartz_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_quartz_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:quartz_pillar",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:quartz_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dropper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:white_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:orange_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:magenta_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_blue_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:yellow_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lime_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pink_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gray_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_gray_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cyan_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purple_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blue_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brown_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:green_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:black_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:iron_trapdoor",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dark_prismarine",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dark_prismarine_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:prismarine_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dark_prismarine_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:coal_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_red_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_red_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_sandstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_stone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:petrified_oak_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobblestone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:nether_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:quartz_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_red_sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purpur_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_stone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_quartz",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_red_sandstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purpur_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purpur_pillar",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purpur_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:end_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:magma_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_nether_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bone_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:observer",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:white_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:orange_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:magenta_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_blue_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:yellow_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lime_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pink_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gray_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_gray_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cyan_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purple_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blue_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brown_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:green_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:black_glazed_terracotta",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:white_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:orange_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:magenta_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_blue_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:yellow_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lime_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pink_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gray_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:light_gray_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cyan_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:purple_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blue_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brown_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:green_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:black_concrete",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_tube_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_brain_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_bubble_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_fire_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_horn_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:tube_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:brain_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bubble_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:fire_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:horn_coral_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_tube_coral",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_brain_coral",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_bubble_coral",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_fire_coral",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_horn_coral",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_tube_coral_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_brain_coral_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_bubble_coral_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_fire_coral_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_horn_coral_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_tube_coral_wall_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_brain_coral_wall_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_bubble_coral_wall_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_fire_coral_wall_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dead_horn_coral_wall_fan",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_granite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_red_sandstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_stone_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_diorite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_cobblestone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:end_stone_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_sandstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_quartz_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:granite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:andesite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_nether_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_andesite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:diorite_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_granite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_red_sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_stone_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_diorite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:mossy_cobblestone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:end_stone_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_sandstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_quartz_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:granite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:andesite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:red_nether_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_andesite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:diorite_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smoker",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blast_furnace",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:grindstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stonecutter",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:bell",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lantern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:soul_lantern",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:warped_nylium",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:crimson_nylium",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:netherite_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:ancient_debris",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:crying_obsidian",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:respawn_anchor",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lodestone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blackstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blackstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blackstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cracked_polished_blackstone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_polished_blackstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:gilded_blackstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_blackstone_pressure_plate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_nether_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cracked_nether_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:quartz_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:tuff",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:calcite",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:oxidized_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weathered_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:exposed_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:copper_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:copper_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_copper_ore",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:oxidized_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weathered_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:exposed_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:oxidized_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weathered_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:exposed_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:oxidized_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:weathered_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:exposed_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_copper_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_weathered_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_exposed_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_oxidized_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_oxidized_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_weathered_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_exposed_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_cut_copper",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_oxidized_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_weathered_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_exposed_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_cut_copper_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_oxidized_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_weathered_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_exposed_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:waxed_cut_copper_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:lightning_rod",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:pointed_dripstone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:dripstone_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobbled_deepslate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobbled_deepslate_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cobbled_deepslate_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_deepslate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_deepslate_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:polished_deepslate_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_tiles",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_tile_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_tile_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_brick_stairs",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:deepslate_brick_slab",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:chiseled_deepslate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cracked_deepslate_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cracked_deepslate_tiles",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:smooth_basalt",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:raw_iron_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:raw_copper_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:raw_gold_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:ice",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:packed_ice",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:blue_ice",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:stone_button",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:piston",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:sticky_piston",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:piston_head",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:amethyst_cluster",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:small_amethyst_bud",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:medium_amethyst_bud",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:large_amethyst_bud",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:amethyst_block",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:budding_amethyst",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_cobblestone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_chiseled_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_cracked_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_deepslate",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_stone",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_mossy_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:infested_stone_bricks",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:walls",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:shulker_boxes",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:anvil",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:cauldrons",
						"speed": 100,
						"on_dig": {
							"event": "break1"
						}
					},
					{
						"block": "minecraft:rails",
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
				"slot": "pickaxe"
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
			"tag:minecraft:is_pickaxe": {}
		},
		"events": {
			"break1": {
				"sequence": [					
					{	
						"damage": {
							"type": "durability",
							"amount": 1,
							"target": "self"
						}
					}
				]				
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