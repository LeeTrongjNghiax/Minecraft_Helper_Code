createArmorJson = armor => `
{
	"format_version": "1.16.0",
	"minecraft:item": {
		"description": {
			"identifier": "nw:${armor.material}_${armor.id}",
			"category": "equipment"
		},
		"components": {
			"minecraft:armor": {
				"protection": ${armor.protection}
			},
			"minecraft:creative_category": {
				"parent": "itemGroup.name.${armor.category}" 
			},
			"minecraft:display_name": {
				"value": "${capitalizeWords(armor.material)} ${armor.name}"
			},
			"minecraft:durability": {
				"max_durability": ${armor.durability}
			},
			"minecraft:enchantable": {
				"value": 1,
				"slot": "armor_${armor.enchantable}" 
			},
			"minecraft:icon": {
				"texture": "${armor.id}"
			},
			"minecraft:max_stack_size": 1,	
			// "minecraft:render_offsets": "${armor.render}", 
			"minecraft:wearable": {
				"dispensable": true,
				"slot": "slot.armor.${armor.wearable}" 
			}			
		}
	}
}
`