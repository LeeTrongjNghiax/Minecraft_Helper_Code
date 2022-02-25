minecraft_block_generator = (block) => `{
  "format_version": "1.16.0",
  "minecraft:block": {
    "description": {
      "identifier": "${ns}:${prefix}_${block.id}"
    },
    "components": {
      "minecraft:block_light_absorption": 0,
      "minecraft:block_light_emission": 0.0,
      "minecraft:breakonpush": false,
      "minecraft:breathability": "solid",
      "minecraft:creative_category": "",
      "minecraft:destroy_time": 0.0,
      "minecraft:display_name": "",
      "minecraft:entity_collision": {
        "origin": [-8.0, 0.0, -8.0],
        "size": [16.0, 16.0, 16.0]
      },
      "minecraft:explosion_resistance": 0.0,
      "minecraft:flammable": {
        "burn_odds": 0,
        "flame_odds": 0
      },
      "minecraft:friction": 0.1,
      "minecraft:geometry": "",
      "minecraft:immovable": false,
      "minecraft:loot": "",
      "minecraft:map_color": "",
      "minecraft:material_instances": {
        "*": {
          "texture": "",
          "render_method": ""
        }
      },
      "minecraft:onlypistonpush": false,
      "minecraft:pick_collision": {
        "origin": [-8.0, 0.0, -8.0],
        "size": [16.0, 16.0, 16.0]
      },
      "minecraft:placement_filter": {
        "allowed_faces": ["up", "down", "north", "south", "east", "west", "side", "all"],
        "block_filter": ["grass", "stone"]
      },
      "minecraft:preventsjumping": false,
      // "minecraft:random_ticking": {

      // }
      "minecraft:rotation": {
        
      },
      "minecraft:unwalkable": false
    }
  }
}`