createSlab = (block, ns, prefix, prefix2) => {
  let coma = (prefix[prefix.length - 1] == `s`) ? `es` : `s`;

  return `{
"format_version": "1.16.0",
"minecraft:block": {
  "description": {
    "identifier": "${ns}:${prefix}_${block.id}",
    "properties": {
      "${ns}:facing_direction": [0, 1, 2, 3, 4, 5]
    }
  },
  "components": {
    "minecraft:loot": "loot_tables/blocks/${prefix}${coma}/${prefix}_${block.id}.json",
    
    "minecraft:on_interact": {
      "event": "block",
      "condition": "query.get_equipped_item_name == '${prefix}_${block.id}'"
    },
    "minecraft:on_player_placing": {
      "event": "set_up_down"
    },
    "minecraft:material_instances": {
      "*": {
        "texture": "${prefix2}_${block.id}",
        "render_method": "blend"
      }
    },
    "minecraft:geometry": "geometry.slab_down",
    "minecraft:entity_collision": {
      "origin": [ -8, 0, -8],
      "size": [ 16, 8, 16 ]
    },
    "minecraft:pick_collision": {
      "origin": [ -8, 0, -8 ],
      "size": [ 16, 8, 16 ]
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
    "set_up_down": {
      "set_block_property": {
        "${ns}:facing_direction": "query.block_face"
      }
    },
    "block": {
      "set_block": {
        "block_type": "${ns}:${prefix2}_${block.id}"
      },
      "decrement_stack": {
      }
    }
  },
  "permutations": [
    {
      "condition": "query.block_property('cb:facing_direction') == 0",
      "components": {
        "minecraft:geometry": "geometry.slab_up",
        "minecraft:entity_collision": {
          "origin": [ -8, 8, -8 ],
          "size": [ 16, 8, 16 ]
        },
        "minecraft:pick_collision": {
          "origin": [ -8, 8, -8 ],
          "size": [ 16, 8, 16 ]
        }
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 1",
      "components": {
        "minecraft:geometry": "geometry.slab_down",
        "minecraft:entity_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 16, 8, 16 ]
        },
        "minecraft:pick_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 16, 8, 16 ]
        }
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 2",
      "components": {
        "minecraft:geometry": "geometry.slab_south",
        "minecraft:entity_collision": {
          "origin": [ -8, 0, 0 ],
          "size": [ 16, 16, 8 ]
        },
        "minecraft:pick_collision": {
          "origin": [ -8, 0, 0 ],
          "size": [ 16, 16, 8 ]
        }
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 3",
      "components": {       
        "minecraft:geometry": "geometry.slab_north",
        "minecraft:entity_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 16, 16, 8 ]
        },
        "minecraft:pick_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 16, 16, 8 ]
        }
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 4",
      "components": {
        "minecraft:geometry": "geometry.slab_east",
        "minecraft:entity_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 8, 16, 16 ]
        },
        "minecraft:pick_collision": {
          "origin": [ -8, 0, -8 ],
          "size": [ 8, 16, 16 ]
        }
      }
    },
    {
      "condition": "query.block_property('cb:facing_direction') == 5",
      "components": {
        "minecraft:geometry": "geometry.slab_west",
        "minecraft:entity_collision": {
          "origin": [ 0, 0, -8 ],
          "size": [ 8, 16, 16 ]
        },
        "minecraft:pick_collision": {
          "origin": [ 0, 0, -8 ],
          "size": [ 8, 16, 16 ]
        }
      }
    }
  ]
}
}`
}