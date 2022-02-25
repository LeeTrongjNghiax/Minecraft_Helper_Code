createGunItem = (gun, ns) => `{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "identifier": "${ns}:${gun.id}",
      "category": "equipment"
    },
    "components": {
      "minecraft:display_name": {},
      "minecraft:icon": {
        "texture": "${gun.id}"
      },
      "minecraft:render_offsets": {
        "main_hand": {
          "first_person": {
            "scale": [0.01, 0.01, 0.01]
          },
          "third_person": {
            "scale": [0.03, 0.03, 0.03]
          }
        }
      },
      "minecraft:use_duration": 30000,
      "minecraft:max_stack_size": 1,
      "minecraft:hand_equipped": true,
      "minecraft:cooldown": {
        "category": "chorusfruit",
        "duration": ${1 / gun.fireRate}
      },
      "minecraft:food": {
        "nutrition": 0,
        "saturation_modifier": "low",
        "can_always_eat": true
      }
    }
  }
}`