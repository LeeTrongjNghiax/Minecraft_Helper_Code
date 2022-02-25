createPlayerEntity = (arr, ns) => {
  let begin = `{"format_version":"1.11.0","minecraft:entity":{"description":{"identifier":"minecraft:player","is_spawnable":false,"is_summonable":false,"is_experimental":false,"scripts":{"animate":[`;

  let end1 = `]},"animations":{`;

  let end2 = `}},"component_groups":{"minecraft:add_bad_omen":{"minecraft:spell_effects":{"add_effects":[{"effect":"bad_omen","duration": 6000,"display_on_screen_animation":true}]},"minecraft:timer":{"time":[ 0.0, 0.0 ],"looping":false,"time_down_event":{"event":"minecraft:clear_add_bad_omen","target":"self"}}},"minecraft:clear_bad_omen_spell_effect":{"minecraft:spell_effects":{}},"minecraft:raid_trigger":{"minecraft:raid_trigger":{"triggered_event":{"event":"minecraft:remove_raid_trigger","target":"self"}},"minecraft:spell_effects":{"remove_effects":"bad_omen"}},`;

  let end3 = `},"components":{"minecraft:experience_reward":{"on_death":"Math.Min(query.player_level * 7, 100)"},"minecraft:type_family":{"family":["player"]},"minecraft:is_hidden_when_invisible":{},"minecraft:loot":{"table":"loot_tables/empty.json"},"minecraft:collision_box":{"width": 0.6,"height": 1.8},"minecraft:can_climb":{},"minecraft:movement":{"value": 0.1},"minecraft:hurt_on_condition":{"damage_conditions":[{"filters":{"test":"in_lava","subject":"self","operator":"==","value":true},"cause":"lava","damage_per_tick": 4}]},"minecraft:attack":{"damage": 1},"minecraft:player.saturation":{"value": 20},"minecraft:player.exhaustion":{"value": 0,"max": 4},"minecraft:player.level":{"value": 0,"max": 24791},"minecraft:player.experience":{"value": 0,"max": 1},"minecraft:breathable":{"total_supply": 15,"suffocate_time": -1,"inhale_time": 3.75,"generates_bubbles":false},"minecraft:nameable":{"always_show":true,"allow_name_tag_renaming":false},"minecraft:physics":{},"minecraft:pushable":{"is_pushable":false,"is_pushable_by_piston":true},"minecraft:insomnia":{"days_until_insomnia": 3},"minecraft:rideable":{"seat_count": 2,"family_types":["parrot_tame"],"pull_in_entities":true,"seats":[{"position":[ 0.4, -0.2, -0.1 ],"min_rider_count": 0,"max_rider_count": 0,"lock_rider_rotation": 0},{"position":[ -0.4, -0.2, -0.1 ],"min_rider_count": 1,"max_rider_count": 2,"lock_rider_rotation": 0}]},"minecraft:conditional_bandwidth_optimization":{},"minecraft:scaffolding_climber":{},"minecraft:environment_sensor":[`;

  let end4 = `]},"events":{"minecraft:gain_bad_omen":{"add":{"component_groups":["minecraft:add_bad_omen"]}},"minecraft:clear_add_bad_omen":{"remove":{"component_groups":["minecraft:add_bad_omen"]},"add":{"component_groups":["minecraft:clear_bad_omen_spell_effect"]}},"minecraft:trigger_raid":{"add":{"component_groups":["minecraft:raid_trigger"]}},"minecraft:remove_raid_trigger":{"remove":{"component_groups":["minecraft:raid_trigger"]}},`;

  let end5 = `}}}`;

  let middle1 = middle2 = middle3 = middle4 = middle5 = ``;

  let comma1 = comma2 = `,`;

  let n = arr.length;

  for (let i = 0; i < n; i++) {

    comma1 = (i == n - 1)  ? `` : `,`;

    let number = arr[i].magazine == `shotgun_magazine` ? 8 : 1;

    middle1 += `"${arr[i].id}"${comma1}`;

    middle2 += `"${arr[i].id}":"controller.animation.${arr[i].id}"${comma1}`;

    middle3 += `"${arr[i].id}":{"minecraft:spawn_entity":[{"min_wait_time": 0,"max_wait_time": 0,"single_use":true,"spawn_entity":"${ns}:${arr[i].id}_ammo_entity","num_to_spawn":${number}}]},`;

    middle5 += `"${arr[i].id}":{"add":{"component_groups":["${arr[i].id}"]}},`;

    for (let j = 0; j <= arr[i].capacity; j++) {

      comma2 = ( (j == arr[i].capacity) && (i == n - 1) ) ? `` : `,`;

      middle3 += `"${arr[i].id}_${j}":{"minecraft:type_family":{"family":["player","${arr[i].id}_${j}"]}}${comma2}`;

      middle4 += `{"on_environment":{"filters":{"all_of":[{"test":"has_equipment","subject":"self","domain":"hand","value":"${ns}:${arr[i].id}:${j}"}]},"event":"${arr[i].id}_${j}"}}${comma2}`;

      middle5 += `"${arr[i].id}_${j}":{"add":{"component_groups":["${arr[i].id}_${j}"]}}${comma2}`;
    }
  }

  return begin + middle1 + end1 + middle2 + end2 + middle3 + end3 + middle4 + end4 + middle5 + end5;
}