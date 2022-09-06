createAttachableJson = armor => {
	let index = (armor.id != "leggings") ? 1 : 2;
	return `
	{
		"format_version": "1.8.0",
		"minecraft:attachable": {
			"description": {
				"identifier": "nw:${armor.material}_${armor.id}",
				"materials": {
					"default": "armor",
					"enchanted": "armor_enchanted"
				},
				"textures": {
					"enchanted": "textures/misc/enchanted_item_glint",
					"default": "textures/models/armors/${armor.material}/${armor.material}_armor${index}"
				},
				"geometry": {
					"default": "geometry.humanoid.armor.${armor.id}"
				},
				"scripts": {
					"parent_setup": "variable.${armor.visible}_layer_visible = 0.0;"
				},
				"render_controllers": [
					"controller.render.armor"
				]
			}
		}
	}
	`
}