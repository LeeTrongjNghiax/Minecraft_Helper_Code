shaderBlock = (ns, id, letter, texture, index) => {
  return `{
    "format_version": "1.16.0",
    "minecraft:block": {
      "description": {
        "identifier": "${ns}:${id}_${letter}${index}",
        "properties": {
          "${ns}:face": [ 2, 3, 4, 5 ]
        }
      },
      "components": {
        "minecraft:material_instances": {
          "*": {
            "texture": "${texture}",
            "render_method": "blend"
          }
        },
        "minecraft:geometry": "geometry.cube_${letter}${index}",
        "minecraft:destroy_time": 3.0,
        "minecraft:on_player_placing": {
          "event": "${ns}:place"
        },
        "minecraft:flammable": {
          "flame_odds": 0,
          "burn_odds": 0
        },
        "minecraft:block_light_absorption": 0.0,
        "minecraft:block_light_emission": 0.0
      },
      "events": {
        "${ns}:place": {
          "set_block_property": {
            "${ns}:face": "(query.cardinal_facing_2d)"
          }
        }
      },
      "permutations": [
        {
          "condition": "query.block_property('${ns}:face') == 2",
          "components": {
            "minecraft:rotation": [0, 0, 0]
          }
        },
        {
          "condition": "query.block_property('${ns}:face') == 3",
          "components": {                                
            "minecraft:rotation": [0, 180, 0]
          }
        },
        {
          "condition": "query.block_property('${ns}:face') == 4",
          "components": {
            "minecraft:rotation": [0, 90, 0]
          }
        },
        {
          "condition": "query.block_property('${ns}:face') == 5",
          "components": {                      
            "minecraft:rotation": [0, -90, 0]
          }
        }
      ] 
    }
  }`;
}