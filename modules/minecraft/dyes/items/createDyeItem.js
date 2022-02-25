createDyeItem = (item, ns) => `{
  "format_version": "1.16.100",
  "minecraft:item": {
    "description": {
      "identifier": "${ns}:dye_powder_${item.id}",
      "category": "equipment"
    },
    "components": {
      "minecraft:display_name": {
        "value": "${item.name} Dye"
      },
      "minecraft:icon": {
        "texture": "dye_powder_${item.id}"
       },
       "minecraft:stacked_by_data": false
    }
  }
}`;