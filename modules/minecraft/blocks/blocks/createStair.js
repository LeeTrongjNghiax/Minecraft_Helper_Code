createStair = (block, ns, prefix, prefix2) => {
  let coma = (prefix[prefix.length - 1] == `s`) ? `es` : `s`;

  return `{
"format_version": "1.16.0",
"minecraft:block": {
  "description": {
    "identifier": "${ns}:${prefix}_${block.id}",
    "properties": {
      "${ns}:facing_direction": [2, 3, 4, 5]
    }
  },
  "components": {
    "minecraft:loot": "loot_tables/blocks/${prefix}${coma}/${prefix}_${block.id}.json",
    "minecraft:on_player_placing": {
      "event": "set_position"
    },
    "minecraft:material_instances": {
      "*": {
        "texture": "${prefix2}_${block.id}",
        "render_method": "blend"
      }
    },
    "minecraft:entity_collision": {
      "origin": [ -8, 0, -8],
      "size": [ 16, 16, 16 ]
    },
    "minecraft:pick_collision": {
      "origin": [ -8, 0, -8 ],
      "size": [ 16, 16, 16 ]
    },
    "minecraft:destroy_time": 3.0,
    "minecraft:flammable": {
      "flame_odds": 1,
      "burn_odds": 1
    },
    "minecraft:block_light_absorption": 0.0,
    "minecraft:block_light_emission": 0.0
  },
  "events": {
    "set_position": {
      "set_block_property": {
        "${ns}:facing_direction": "(query.cardinal_facing_2d)"
      }
    }
  },
  "permutations": [
    {
      "condition": "query.block_property('cb:facing_direction') == 2",
      "components": {
        "minecraft:geometry": "geometry.${prefix}_north"
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 3",
      "components": {                                
        "minecraft:geometry": "geometry.${prefix}_south"
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 4",
      "components": {
        "minecraft:geometry": "geometry.${prefix}_west"
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 5",
      "components": {                      
        "minecraft:geometry": "geometry.${prefix}_east"
      }
    }
  ]
}
}`
}