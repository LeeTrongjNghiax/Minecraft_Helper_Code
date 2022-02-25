creatGunAnimationController = (gun, ns) => {

  let begin1 = `{
  "format_version": "1.10.0",
  "animation_controllers": {
    "controller.animation.${gun.id}": {
      "initial_state": "default",
      "states": {
        "default": {
          "transitions": [`

  let end1 = `
          ]
        },`

  let end2 = `}}}}`;

  let middle1 = middle2 = ``

  let middle3 = `"ammo0":{"transitions":[{"default":"(!query.is_using_item)"}],"on_entry":["/title @s actionbar §4${gun.name}'s Ammo Run Out"]},`;

  let middle4 = `"display0":{"transitions":[{"default":"(1.0)"}],"on_entry":["/title @s actionbar ${gun.name}'s Ammo: 0/${gun.capacity}"]},`;

  let comma1 = comma2 = `,`;

  let n = gun.capacity;

  for (let i = 0; i <= n; i++) {
    comma1 = (i == n) ? `` : `,`;

    middle1 += `{"ammo${i}":"query.has_any_family('${gun.id}_${i}') && query.get_equipped_item_name=='${gun.id}' && query.is_using_item"},`; 

    middle2 += `{"display${i}":"query.has_any_family('${gun.id}_${i}') && query.get_equipped_item_name=='${gun.id}'"}${comma1}`;

    if (i != n) {
      comma2 = (i == n - 1) ? `` : `,`;

      middle3 += `"ammo${i + 1}":{"transitions":[{"default":"(1.0)"}],"on_entry":["/replaceitem entity @s slot.weapon.mainhand 0 ${ns}:${gun.id} 1 ${i}", "@s ${gun.id}"]},`;

      middle4 += `"display${i + 1}":{"transitions":[{"default":"(1.0)"}],"on_entry":["/title @s actionbar ${gun.name}'s Ammo: ${i + 1}/${gun.capacity}"]}` + comma2 + ``;
    }
  }

  return begin1 + middle1 + middle2 + end1 + middle3 + middle4 + end2;
}