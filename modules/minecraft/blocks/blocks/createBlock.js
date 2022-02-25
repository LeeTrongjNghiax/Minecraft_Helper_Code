createBlock = (block, ns, prefix) => {
  let coma = (prefix[prefix.length - 1] == `s`) ? `es` : `s`;

  let text = `{
"format_version": "1.17.0",
"minecraft:block": {
  "description": {
    "identifier": "${ns}:${prefix}_${block.id}"
  },
  "components": {
    "minecraft:loot": "loot_tables/blocks/${prefix}${coma}/${prefix}_${block.id}.json",
    "minecraft:material_instances": {
      "*": {
        "texture": "${prefix}_${block.id}",
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
    "minecraft:destroy_time": 2.0,
    "minecraft:flammable": {
      "flame_odds": 1,
      "burn_odds": 1
    },
    "minecraft:block_light_absorption": 0.0,
    "minecraft:block_light_emission": 0.0
  }
}
}`
  return text;
}