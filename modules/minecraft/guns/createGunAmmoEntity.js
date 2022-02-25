createGunAmmoEntity = (gun, ns) => {
  let comma = text = ``;
    
  comma = (gun.magazine == `shotgun_magazine`) ? `,` : ``;
  text = (gun.magazine == `shotgun_magazine`) ? `"uncertainty_base": 8` : ``;

  return `{
  "format_version": "1.12.0",
  "minecraft:entity": {
    "description": {
      "identifier": "${ns}:${gun.id}_ammo_entity",
      "is_spawnable": true,
      "is_summonable": true,
      "is_experimental": false,
      "runtime_identifier": "minecraft:snowball",
      "scripts": {
        "animate": ["ammo"]
      },
      "animations": {
        "ammo": "controller.animation.ammo"
      }
    },
    "components": {
      "minecraft:collision_box": {
        "width": 0.01,
        "height": 0.01
      },
      "minecraft:physics": {
      },
      "minecraft:projectile": {
        "on_hit": {
          "remove_on_hit": {},
          "impact_damage": {
            "damage": ${Math.round(gun.damage * 0.2)},
            "destroy_on_hit": true,
            "knockback": false
          }
        },
        "anchor": 1,
        "gravity": 0.01,
        "offset": [0, 2, 0],
        "power": 10,
        "reflect_on_hurt": false,
        "semi_random_diff_damage": true,
        "should_bounce": true${comma}
        ${text}
      }
    }
  }
}`
}