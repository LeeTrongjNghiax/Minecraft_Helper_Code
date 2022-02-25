getRandInt = (min, max) => Math.round(Math.random() * (max - min) + min);
getRandFloat = (min, max) => Math.random() * (max - min) + min;

createRandomEvent = (maxEvents, events) => {
  class Event{
    constructor(sequence, random, event) {
      this.sequence = sequence;
      this.random = random;
      this.event = event;
    }
  } 

  let sequenceLength = getRandInt(2, maxEvents);
  let randomLength = getRandInt(2, maxEvents);

  let sequences = [];
  let randoms = [];

  let randomEvent;

  for (let i = 0; i < sequenceLength; i++) {
    let opt = getRandInt(1, 3);
    let eventOpt = getRandInt(0, events.length - 1);
    if (opt == 1) {
      sequences.push(createRandomEvent(maxEvents - 1, events));
    } else {
      sequences.push(events[eventOpt]);
    }
  }

  for (let i = 0; i < randomLength; i++) {
    let opt = getRandInt(1, 3);    
    let eventOpt = getRandInt(0, events.length - 1);
    if (opt == 1) {
      randoms.push(createRandomEvent(maxEvents - 1, events));
    } else {
      randoms.push(events[eventOpt]);
    }
  }

  let eventOpt = getRandInt(0, events.length - 1);
  randomEvent = new Event(sequences, randoms, events[eventOpt]);

  return randomEvent;
}

printEvent = (event, num) => {
  let opt = getRandInt(0, 2);
  let text = ``;
  let coma = ","

  if (num == 0) {
    switch (opt) {
      case 0:
        text += event.event;
        break;

      case 1:
        text += '"sequence": [';
        for (let i = 0; i < event.sequence.length; i++) {
          coma = (i == event.sequence.length - 1) ? "" : ",";
          if (typeof(event.sequence[i]) === "object") {
            text += '{' + printEvent(event.sequence[i], 1) + '}' + coma;
          } else {
            text += '{' + event.sequence[i] + '}' + coma;
          }
        }
        text += ']';
        text = text.slice(0, text.length);
        break;

      case 2:
        text += '"randomize": [';
        for (let i = 0; i < event.random.length; i++) {
          coma = (i == event.random.length - 1) ? "" : ",";
          if (typeof(event.random[i]) === "object") {
            text += '{' + printEvent(event.random[i], 1) + '}' + coma;
          } else {
            text += '{' + event.random[i] + '}' + coma;
          }
        }
        text += ']';
        text = text.slice(0, text.length);
        break;
    }
  } else {
    text += event.event + ',';

    text += '"sequence": [';
    for (let i = 0; i < event.sequence.length; i++) {
      coma = (i == event.sequence.length - 1) ? "" : ",";
      if (typeof(event.sequence[i]) === "object") {
        text += '{' + printEvent(event.sequence[i], 1) + '}' + coma;
      } else {
        text += '{' + event.sequence[i] + '}' + coma;
      }
    }
    text += '],';

    text += '"randomize": [';
    for (let i = 0; i < event.random.length; i++) {
      coma = (i == event.random.length - 1) ? "" : ",";
      if (typeof(event.random[i]) === "object") {
        text += '{' + printEvent(event.random[i], 1) + '}' + coma;
      } else {
        text += '{' + event.random[i] + '}' + coma;
      }
    }
    text += ']';
  }
  return text;
}

returnRandomCommand = () => {

  let commands = [];

  //Command camerashake

  let shakeTypes = ["positional", "rotational"];
  let camerashake = {
    player: ["@p", "@r", "@a", "@e", "@s"],
    intensity: { min: 0, max: 4 },
    seconds: { min: 0, max: 9 },
    shakeType: ["positional", "rotational"]
  }

  //Command clear

  let clear = {
    player: ["@p", "@r", "@a", "@e", "@s"],
    itemName: [],
    data: [],
    maxCount: { min: 0, max: 64 }
  }

  //Command clearspawnpoint

  let clearspawnpoint = {
    player: ["@p", "@r", "@a", "@e", "@s"]
  }

  //Command clone

  let clone = {
    begin: {
      x: { min: -32, max: 32 },
      y: { min: -32, max: 32 },
      z: { min: -32, max: 32 },
    },
    end: {
      x: { min: -32, max: 32 },
      y: { min: -32, max: 32 },
      z: { min: -32, max: 32 },
    },
    destination: {
      x: { min: -32, max: 32 },
      y: { min: -32, max: 32 },
      z: { min: -32, max: 32 },
    },
    maskMode: ["replace", "masked"],
    cloneMode: ["force", "move", "normal"],

    tileName: [], // block list
    tileData: [], // block data
    blockStates: ""
  }

  //Command difficulty

  let difficulty = {
    difficulty: ["easy", "hard", "normal", "peaceful"]
  }

  //Command effect

  let effect = {
    player: ["@p", "@r", "@a", "@e", "@s"],
    effect: [
      "speed", 
      "slowness", 
      "haste", 
      "mining_fatigue", 
      "strength", 
      "instant_health", 
      "instant_damage", 
      "jump_boost", 
      "nausea", 
      "regeneration", 
      "resistance", 
      "fire_resistance", 
      "water_breathing", 
      "invisibility", 
      "blindness", 
      "night_vision", 
      "hunger", 
      "weakness", 
      "poison", 
      "wither", 
      "health_boost", 
      "absorption", 
      "saturation", 
      "levitation", 
      "fatal_poison", 
      "slow_falling", 
      "conduit_power", 
      "bad_omen", 
      "village_hero‌", 
      "darkness‌"
    ],
    seconds: { min: 1, max: 10 },
    amplifier: { min: 1, max: 5 },
    hideParticles: [true, false]
  }

  //Command enchant

  let enchantmentNames = [
    {
      name: "bane_of_arthropods",
      maxLevel: getRandInt(1, 5)
    },
    {
      name: "binding",
      maxLevel: getRandInt(1, 1)
    },
    {
      name: "vanishing",
      maxLevel: getRandInt(1, 1)
    },
    {
      name: "fire_aspect",
      maxLevel: getRandInt(1, 2)
    },
    {
      name: "knockback",
      maxLevel: getRandInt(1, 2)
    },
    {
      name: "looting",
      maxLevel: getRandInt(1, 3)
    },
    {
      name: "mending",
      maxLevel: getRandInt(1, 1)
    },
    {
      name: "sharpness",
      maxLevel: getRandInt(1, 5)
    },
    {
      name: "smite",
      maxLevel: getRandInt(1, 5)
    },
    {
      name: "unbreaking",
      maxLevel: getRandInt(1, 5)
    }
  ]
  let opt = enchantmentNames[getRandInt(0, enchantmentNames.length - 1)];
  let enchant = {
    player: ["@p", "@r", "@a", "@e", "@s"],
    enchantmentName: opt.name,
    level: opt.maxLevel
  }

  //Command execute

  let execute = {
    origin: ["@p", "@r", "@a", "@e", "@s"],
    position: {
      x: { min: -16, max: 16 },
      y: { min: -16, max: 16 },
      z: { min: -16, max: 16 },
    },
    detectPos: {
      x: { min: -16, max: 16 },
      y: { min: -16, max: 16 },
      z: { min: -16, max: 16 },
    },
    block: [],
    data: [],
    command: commands[getRandInt(0, commands.length - 1)],
  }

  //Command experience 

  let experience = {
    amountPoint: { min: 0, max: 2147483647 },
    amountLevel: { min: -2147483648, max: 2147483647 },
    player: ["@p", "@r", "@a", "@e", "@s"]
  }

  //Command fill

  let oldBlockHandlings = ["destroy", "hollow", "keep", "outline", "replace"]
  let fill = {
    from: { 
      x: { min: -32, max: 32 },
      y: { min: -32, max: 32 },
      z: { min: -32, max: 32 },
    },
    to: { 
      x: { min: -32, max: 32 },
      y: { min: -32, max: 32 },
      z: { min: -32, max: 32 },
    },
    tileName: [],
    tileData: [],
    oldBlockHandling: ["destroy", "hollow", "keep", "outline", "replace"],
    blockStates: "",
    replaceTileName: [],
    replaceTileData: []
  }

  //Command fog

  let fog = {
    victim: ["@p", "@r", "@a", "@e", "@s"],
    fogID: [
      "minecraft:fog_bamboo_jungle",
      "minecraft:fog_bamboo_jungle_hills",
      "minecraft:fog_basalt_deltas",
      "minecraft:fog_beach",
      "minecraft:fog_birch_forest",
      "minecraft:fog_birch_forest_hills",
      "minecraft:fog_cold_beach",
      "minecraft:fog_cold_ocean",
      "minecraft:fog_cold_taiga",
      "minecraft:fog_cold_taiga_hills",
      "minecraft:fog_cold_taiga_mutated",
      "minecraft:fog_crimson_forest",
      "minecraft:fog_deep_cold_ocean",
      "minecraft:fog_deep_frozen_ocean",
      "minecraft:fog_deep_lukewarm_ocean",
      "minecraft:fog_deep_ocean",
      "minecraft:fog_deep_warm_ocean",
      "minecraft:fog_default",
      "minecraft:fog_desert",
      "minecraft:fog_desert_hills",
      "minecraft:fog_extreme_hills",
      "minecraft:fog_extreme_hills_edge",
      "minecraft:fog_extreme_hills_mutated",
      "minecraft:fog_extreme_hills_plus_trees",
      "minecraft:fog_extreme_hills_plus_trees_mutated",
      "minecraft:fog_flower_forest",
      "minecraft:fog_forest",
      "minecraft:fog_forest_hills",
      "minecraft:fog_frozen_ocean",
      "minecraft:fog_frozen_river",
      "minecraft:fog_hell",
      "minecraft:fog_ice_mountains",
      "minecraft:fog_ice_plains",
      "minecraft:fog_ice_plains_spikes",
      "minecraft:fog_jungle",
      "minecraft:fog_jungle_edge",
      "minecraft:fog_jungle_hills",
      "minecraft:fog_jungle_mutated",
      "minecraft:fog_lukewarm_ocean",
      "minecraft:fog_mega_spruce_taiga",
      "minecraft:fog_mega_spruce_taiga_mutated",
      "minecraft:fog_mega_taiga",
      "minecraft:fog_mega_taiga_hills",
      "minecraft:fog_mega_taiga_mutated",
      "minecraft:fog_mesa",
      "minecraft:fog_mesa_bryce",
      "minecraft:fog_mesa_mutated",
      "minecraft:fog_mesa_plateau",
      "minecraft:fog_mesa_plateau_stone",
      "minecraft:fog_mushroom_island",
      "minecraft:fog_mushroom_island_shore",
      "minecraft:fog_ocean",
      "minecraft:fog_plains",
      "minecraft:fog_river",
      "minecraft:fog_roofed_forest",
      "minecraft:fog_savanna",
      "minecraft:fog_savanna_mutated",
      "minecraft:fog_savanna_plateau",
      "minecraft:fog_soulsand_valley",
      "minecraft:fog_stone_beach",
      "minecraft:fog_sunflower_plains",
      "minecraft:fog_swampland",
      "minecraft:fog_swampland_mutated",
      "minecraft:fog_taiga",
      "minecraft:fog_taiga_hills",
      "minecraft:fog_taiga_mutated",
      "minecraft:fog_the_end",
      "minecraft:fog_warm_ocean",
      "minecraft:fog_warped_forest"
    ],
    mode: ["pop", "remove"],
    userProvidedId: ["steve"]
  }

  //Command gamemode

  let gamemode = {
    gamemode: { min: 0, max: 2 },
    player: ["@p", "@r", "@a", "@e", "@s"],
  }

  //Command gamerule

  let gamerules = [
    {
      rule: "commandBlocksEnabled",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "commandBlockOutput",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doDaylightCycle",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doEntityDrops",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doFireTick",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doInsomnia",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doImmediateRespawn",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doMobLoot",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doMobSpawning",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doTileDrops",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "doWeatherCycle",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "drowningDamage",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "fallDamage",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "fireDamage",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "freezeDamage",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "functionCommandLimit",
      value: getRandInt(0, 10000)
    },
    {
      rule: "keepInventory",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "maxCommandChainLength",
      value: getRandInt(0, 65536)
    },
    {
      rule: "maxCommandChainLength",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "mobGriefing",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "naturalRegeneration",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "pvp",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "randomTickSpeed",
      value: !!getRandInt(0, 4096)
    },
    {
      rule: "respawnblocksexplode",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "sendCommandFeedback",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "showCoordinates",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "showDeathMessages",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "spawnRadius",
      value: !!getRandInt(0, 32)
    },
    {
      rule: "tntExplodes",
      value: !!getRandInt(0, 1)
    },
    {
      rule: "showTags",
      value: !!getRandInt(0, 1)
    }
  ]
  let grOpt = gamerules[getRandInt(0, gamerules.length - 1)];
  let gamerule = {
    gamerule: grOpt.rule,
    value: grOpt.value
  }

  //Command give

  let give = {
    player: ["@p", "@r", "@a", "@e", "@s"],
    itemName: [],
    amount: { min: 1, max: 64 },
    data: [],
    components: ""
  }

  //Command immutableworld

  let immutableworld = {
    value: [true, false]
  }

  //Command kill

  let kill = {
    target: ["@p", "@r", "@a", "@e", "@s"]
  }

  //Command locate

  let locate = {
    feature: [
      "bastionremnant",
      "buriedtreasure",
      "endcity",
      "fortress",
      "mansion",
      "mineshaft",
      "monument",
      "ruins",
      "pillageroutpost",
      "ruinedportal",
      "shipwreck",
      "stronghold",
      "temple",
      "village"
    ]
  }

  //Command music

  let music = {
    trackName: [
      "record.13",
      "record.cat",
      "record.blocks",
      "record.chirp",
      "record.far",
      "record.mall",
      "record.mellohi",
      "record.stal",
      "record.strad",
      "record.ward",
      "record.11",
      "record.wait",
      "record.Pigstep",
      "record.otherside"
    ],
    volume: { min: 0, max: 1 },
    fadeSeconds: { min: 0, max: 10 },
    repeatMode: ["loop", "play_once"]
  }

  //Command particle

  let particle = {
    effect: [
      "minecraft:arrow_spell_emitter",
      "minecraft:balloon_gas_particle",
      "minecraft:basic_bubble_particle",
      "minecraft:basic_bubble_particle_manual",
      "minecraft:basic_crit_particle",
      "minecraft:basic_flame_particle",
      "minecraft:basic_portal_particle",
      "minecraft:basic_smoke_particle",
      "minecraft:bleach",
      "minecraft:block_destruct",
      "minecraft:block_slide",
      "minecraft:breaking_item_icon",
      "minecraft:breaking_item_terrain",
      "minecraft:bubble_column_bubble",
      "minecraft:bubble_column_down_particle",
      "minecraft:bubble_column_up_particle",
      "minecraft:camera_shoot_explosion",
      "minecraft:campfire_smoke_particle",
      "minecraft:campfire_tall_smoke_particle",
      "minecraft:cauldron_bubble_particle",
      "minecraft:cauldron_explosion_emitter",
      "minecraft:cauldron_spell_emitter",
      "minecraft:cauldron_splash_particle",
      "minecraft:colored_flame_particle",
      "minecraft:conduit_absorb_particle",
      "minecraft:conduit_attack_emitter",
      "minecraft:conduit_particle",
      "minecraft:critical_hit_emitter",
      "minecraft:death_explosion_emitter",
      "minecraft:dolphin_move_particle",
      "minecraft:dragon_breath_fire",
      "minecraft:dragon_breath_lingering",
      "minecraft:dragon_breath_trail",
      "minecraft:dragon_death_explosion_emitter",
      "minecraft:dragon_destroy_block",
      "minecraft:dragon_dying_explosion",
      "minecraft:egg_destroy_emitter",
      "minecraft:electric_spark_particle",
      "minecraft:elephant_tooth_paste_vapor_particle",
      "minecraft:enchanting_table_particle",
      "minecraft:end_chest",
      "minecraft:endrod",
      "minecraft:evocation_fang_particle",
      "minecraft:evoker_spell",
      "minecraft:explosion_manual",
      "minecraft:explosion_particle",
      "minecraft:eye_of_ender_bubble_particle",
      "minecraft:eyeofender_death_explode_particle",
      "minecraft:falling_border_dust_particle",
      "minecraft:falling_dust",
      "minecraft:falling_dust_concrete_powder_particle",
      "minecraft:falling_dust_dragon_egg_particle",
      "minecraft:falling_dust_gravel_particle",
      "minecraft:falling_dust_red_sand_particle",
      "minecraft:falling_dust_sand_particle",
      "minecraft:falling_dust_scaffolding_particle",
      "minecraft:falling_dust_top_snow_particle",
      "minecraft:fish_hook_particle",
      "minecraft:fish_pos_particle",
      "minecraft:guardian_attack_particle",
      "minecraft:guardian_water_move_particle",
      "minecraft:heart_particle",
      "minecraft:honey_drip_particle",
      "minecraft:huge_explosion_emitter",
      "minecraft:huge_explosion_lab_misc_emitter",
      "minecraft:ice_evaporation_emitter",
      "minecraft:ink_emitter",
      "minecraft:knockback_roar_particle",
      "minecraft:lab_table_heatblock_dust_particle",
      "minecraft:lab_table_misc_mystical_particle",
      "minecraft:large_explosion",
      "minecraft:lava_drip_particle",
      "minecraft:lava_particle",
      "minecraft:llama_spit_smoke",
      "minecraft:magnesium_salts_emitter",
      "minecraft:misc_fire_vapor_particle",
      "minecraft:mob_block_spawn_emitter",
      "minecraft:mob_portal",
      "minecraft:mobflame_emitter",
      "minecraft:mobflame_single",
      "minecraft:mobspell_emitter",
      "minecraft:mycelium_dust_particle",
      "minecraft:nectar_drip_particle",
      "minecraft:note_particle",
      "minecraft:obsidian_glow_dust_particle",
      "minecraft:phantom_trail_particle",
      "minecraft:portal_directional",
      "minecraft:portal_east_west",
      "minecraft:portal_north_south",
      "minecraft:rain_splash_particle",
      "minecraft:redstone_ore_dust_particle",
      "minecraft:redstone_repeater_dust_particle",
      "minecraft:redstone_torch_dust_particle",
      "minecraft:redstone_wire_dust_particle",
      "minecraft:rising_border_dust_particle",
      "minecraft:sculk_sensor_redstone_particle",
      "minecraft:shulker_bullet",
      "minecraft:silverfish_grief_emitter",
      "minecraft:snowflake_particle",
      "minecraft:sparkler_emitter",
      "minecraft:splash_spell_emitter",
      "minecraft:sponge_absorb_water_particle",
      "minecraft:spore_blossom_ambient_particle",
      "minecraft:spore_blossom_shower_particle",
      "minecraft:squid_flee_particle",
      "minecraft:squid_ink_bubble",
      "minecraft:squid_move_particle",
      "minecraft:stunned_emitter",
      "minecraft:terrain",
      "minecraft:totem_manual",
      "minecraft:totem_particle",
      "minecraft:trackingemitter",
      "minecraft:underwater_torch_particle",
      "minecraft:vibration_signal",
      "minecraft:villager_angry",
      "minecraft:villager_happy",
      "minecraft:water_drip_particle",
      "minecraft:water_evaporation_actor_emitter",
      "minecraft:water_evaporation_bucket_emitter",
      "minecraft:water_evaporation_manual",
      "minecraft:water_splash_particle",
      "minecraft:water_splash_particle_manual",
      "minecraft:water_wake_particle",
      "wax_particle",
      "minecraft:witchspell",
      "minecraft:wither_boss_invulnerable"
    ],
    position: {
      x: { min: -16, max: 16 },
      y: { min: -16, max: 16 },
      z: { min: -16, max: 16 },
    }
  }

  //Command playsound

  let playsound = {
    sound: [

    ],
    player: ["@p", "@r", "@a", "@e", "@s"],
    position: {
      x: { min: -16, max: 16 },
      y: { min: -16, max: 16 },
      z: { min: -16, max: 16 },
    },
    volume: { min: 0, max: 64 },
    pitch: { min: 0, max: 64 },
    miniumVolume: { min: 0, max: 16 }
  }

  commands.push(
    `camera shake add ${camerashake.player[getRandInt(0, camerashake.player.length - 1)]} ${getRandInt(camerashake.intensity.min, camerashake.intensity.max)} ${getRandInt(camerashake.seconds.min, camerashake.seconds.max)} ${camerashake.shakeType[getRandInt(0, camerashake.shakeType.length - 1)]}`,
    //`/clear ${clear.player[getRandInt(0, clear.player.length - 1)]} ${clear.itemName} ${clear.data} ${getRandInt(clear.maxCount.min, clear.maxCount.max)}`,
    `clearspawnpoint ${clearspawnpoint.player[getRandInt(0, clearspawnpoint.player.length - 1)]}`,
    // `/clone ${getRandInt(clone.begin.x.min, clone.begin.x.max)} ${getRandInt(clone.begin.y.min, clone.begin.y.max)} ${getRandInt(clone.begin.z.min, clone.begin.z.max)} ${getRandInt(clone.end.x.min, clone.end.x.max)} ${getRandInt(clone.end.y.min, clone.end.y.max)} ${getRandInt(clone.end.z.min, clone.end.z.max)} ${getRandInt(clone.destination.x.min, clone.destination.x.max)} ${getRandInt(clone.destination.y.min, clone.destination.y.max)} ${getRandInt(clone.destination.z.min, clone.destination.z.max)} ${clone.maskMode[getRandInt(0, clone.maskMode.length - 1)]} ${clone.cloneMode[getRandInt(0, clone.cloneMode.length - 1)]}`,
    // `/clone ${getRandInt(clone.begin.x.min, clone.begin.x.max)} ${getRandInt(clone.begin.y.min, clone.begin.y.max)} ${getRandInt(clone.begin.z.min, clone.begin.z.max)} ${getRandInt(clone.end.x.min, clone.end.x.max)} ${getRandInt(clone.end.y.min, clone.end.y.max)} ${getRandInt(clone.end.z.min, clone.end.z.max)} ${getRandInt(clone.destination.x.min, clone.destination.x.max)} ${getRandInt(clone.destination.y.min, clone.destination.y.max)} ${getRandInt(clone.destination.z.min, clone.destination.z.max)} filter ${clone.cloneMode[getRandInt(0, clone.cloneMode.length - 1)]} ${clone.tileName} ${clone.tileData}`,
    // `/clone ${getRandInt(clone.begin.x.min, clone.begin.x.max)} ${getRandInt(clone.begin.y.min, clone.begin.y.max)} ${getRandInt(clone.begin.z.min, clone.begin.z.max)} ${getRandInt(clone.end.x.min, clone.end.x.max)} ${getRandInt(clone.end.y.min, clone.end.y.max)} ${getRandInt(clone.end.z.min, clone.end.z.max)} ${getRandInt(clone.destination.x.min, clone.destination.x.max)} ${getRandInt(clone.destination.y.min, clone.destination.y.max)} ${getRandInt(clone.destination.z.min, clone.destination.z.max)} filter ${clone.cloneMode[getRandInt(0, clone.cloneMode.length - 1)]} ${clone.tileName} ${clone.blockStates}`,
    `difficulty ${difficulty.difficulty[getRandInt(0, difficulty.difficulty.length - 1)]}`,
    `effect ${effect.player[getRandInt(0, effect.player.length - 1 )]} clear`,
    `effect ${effect.player[getRandInt(0, effect.player.length - 1 )]} ${effect.effect[getRandInt(0, effect.effect.length - 1)]} ${getRandFloat(effect.seconds.min, effect.seconds.max)} ${getRandInt(effect.amplifier.min, effect.amplifier.max)} ${effect.hideParticles[getRandInt(0, effect.hideParticles.length - 1)]}`,
    `enchant ${enchant.player[getRandInt(0, enchant.player.length - 1)]} ${enchant.enchantmentName} ${enchant.level}`,
    // `/execute ${execute.origin[getRandInt(0, execute.origin.length - 1)]} ${getRandInt(execute.position.x.min, execute.position.x.max)} ${getRandInt(execute.position.y.min, execute.position.y.max)} ${getRandInt(execute.position.z.min, execute.position.z.max)} ${execute.command}`,
    // `/execute ${execute.origin[getRandInt(0, execute.origin.length - 1)]} ${getRandInt(execute.position.x.min, execute.position.x.max)} ${getRandInt(execute.position.y.min, execute.position.y.max)} ${getRandInt(execute.position.z.min, execute.position.z.max)} detect ${getRandInt(execute.detectPos.x.min, execute.detectPos.x.max)} ${getRandInt(execute.detectPos.y.min, execute.detectPos.y.max)} ${getRandInt(execute.detectPos.z.min, execute.detectPos.z.max)} ${execute.data} ${execute.command}`,
    `xp ${getRandInt(experience.amountPoint.min, experience.amountPoint.max)} ${experience.player[getRandInt(0, experience.player.length - 1)]}`,
    `xp ${getRandInt(experience.amountLevel.min, experience.amountLevel.max)}L  ${experience.player[getRandInt(0, experience.player.length - 1)]}`,
    // `/fill ${getRandInt(fill.from.x.min, fill.from.x.max)} ${getRandInt(fill.from.y.min, fill.from.y.max)} ${getRandInt(fill.from.z.min, fill.from.z.max)} ${getRandInt(fill.to.x.min, fill.to.x.max)} ${getRandInt(fill.to.y.min, fill.to.y.max)} ${getRandInt(fill.to.z.min, fill.to.z.max)} ${fill.tileName} ${fill.tileData} ${fill.oldBlockHandling[getRandInt(0, fill.oldBlockHandling.length - 1)]}`,
    // `/fill ${getRandInt(fill.from.x.min, fill.from.x.max)} ${getRandInt(fill.from.y.min, fill.from.y.max)} ${getRandInt(fill.from.z.min, fill.from.z.max)} ${getRandInt(fill.to.x.min, fill.to.x.max)} ${getRandInt(fill.to.y.min, fill.to.y.max)} ${getRandInt(fill.to.z.min, fill.to.z.max)} ${fill.tileName} ${fill.blockStates} ${fill.oldBlockHandling[getRandInt(0, fill.oldBlockHandling.length - 1)]}`,
    // `/fill ${getRandInt(fill.from.x.min, fill.from.x.max)} ${getRandInt(fill.from.y.min, fill.from.y.max)} ${getRandInt(fill.from.z.min, fill.from.z.max)} ${getRandInt(fill.to.x.min, fill.to.x.max)} ${getRandInt(fill.to.y.min, fill.to.y.max)} ${getRandInt(fill.to.z.min, fill.to.z.max)} ${fill.tileName} ${fill.tileData} replace ${fill.replaceTileName} ${fill.replaceTileData}`,
    // `/fill ${getRandInt(fill.from.x.min, fill.from.x.max)} ${getRandInt(fill.from.y.min, fill.from.y.max)} ${getRandInt(fill.from.z.min, fill.from.z.max)} ${getRandInt(fill.to.x.min, fill.to.x.max)} ${getRandInt(fill.to.y.min, fill.to.y.max)} ${getRandInt(fill.to.z.min, fill.to.z.max)} ${fill.tileName} ${fill.blockStates} replace ${fill.replaceTileName} ${fill.replaceTileData}`,
    `fog ${fog.victim[getRandInt(0, fog.victim.length - 1)]} push ${fog.fogID[getRandInt(0, fog.fogID.length - 1)]} ${fog.userProvidedId}`,
    `fog ${fog.victim[getRandInt(0, fog.victim.length - 1)]} ${fog.mode[getRandInt(0, fog.mode.length - 1)]} ${fog.userProvidedId}`,
    `gamemode ${getRandInt(gamemode.gamemode.min, gamemode.gamemode.max)} ${gamemode.player[getRandInt(0, gamemode.player.length - 1)]}`,
    `gamerule ${gamerule.gamerule} ${gamerule.value}`,
    // `/give ${give.player} ${give.itemName} ${give.amount} ${give.data}`,
    `immutableworld ${immutableworld.value[getRandInt(0, immutableworld.value.length - 1)]}`,
    `kill ${kill.target[getRandInt(0, kill.target.length - 1)]}`,
    `locate ${locate.feature[getRandInt(0, locate.feature.length - 1)]}`,
    `music play ${music.trackName[getRandInt(0, music.trackName.length - 1)]} ${getRandFloat(music.volume.min, music.volume.max)} ${getRandFloat(music.fadeSeconds.min, music.fadeSeconds.max)} ${music.repeatMode[getRandInt(0, music.repeatMode.length - 1)]}`,
    `music queue ${music.trackName[getRandInt(0, music.trackName.length - 1)]} ${getRandFloat(music.volume.min, music.volume.max)} ${getRandFloat(music.fadeSeconds.min, music.fadeSeconds.max)} ${music.repeatMode[getRandInt(0, music.repeatMode.length - 1)]}`,
    `music stop ${getRandFloat(music.fadeSeconds.min, music.fadeSeconds.max)}`,
    `music volume ${getRandFloat(music.volume.min, music.volume.max)}`,
    `particle ${particle.effect[getRandInt(0, particle.effect.length - 1)]} ${getRandInt(particle.position.x.min, particle.position.x.max)} ${getRandInt(particle.position.y.min, particle.position.y.max)} ${getRandInt(particle.position.z.min, particle.position.z.max)}`,
    //`/playsound ${playsound.sound[getRandInt(0, playsound.sound.length - 1)]} ${playsound.player[getRandInt(0, playsound.player.length - 1)]} ${getRandInt(playsound.position.x.min, playsound.position.x.max)} ${getRandInt(playsound.position.y.min, playsound.position.y.max)} ${getRandInt(playsound.position.z.min, playsound.position.z.max)} ${getRandFloat(playsound.volume.min, playsound.volume.max)} ${getRandFloat(playsound.pitch.min, playsound.pitch.max)} ${getRandFloat(playsound.miniumVolume.min, playsound.miniumVolume.max)}`,
    `reload`,
  );

  return commands[getRandInt(0, commands.length - 1)];
}

returnRandomEvent = () => {
  class Event{
    constructor(sequence, random, event) {
      this.sequence = sequence;
      this.random = random;
      this.event = event;
    }
  }

  let damageEvent = {
    type: ["durability", "magic"],
    amount: { min: 1, max: 1000 },
    target: ["self", "other", "holder"]
  }

  let addMobEffectEvent = {
    effect: [
      "speed", 
      "slowness", 
      "haste", 
      "mining_fatigue", 
      "strength", 
      "instant_health", 
      "instant_damage", 
      "jump_boost", 
      "nausea", 
      "regeneration", 
      "resistance", 
      "fire_resistance", 
      "water_breathing", 
      "invisibility", 
      "blindness", 
      "night_vision", 
      "hunger", 
      "weakness", 
      "poison", 
      "wither", 
      "health_boost", 
      "absorption", 
      "saturation", 
      "levitation", 
      "fatal_poison", 
      "slow_falling", 
      "conduit_power", 
      "bad_omen", 
      "village_hero‌", 
      "darkness‌"
    ],
    target: ["self", "other", "holder"],
    duration: { min: 1, max: 10 },
    amplifier: { min: 1, max: 5 },
  }

  let removeMobEffectEvent = {
    effect: [
      "speed", 
      "slowness", 
      "haste", 
      "mining_fatigue", 
      "strength", 
      "instant_health", 
      "instant_damage", 
      "jump_boost", 
      "nausea", 
      "regeneration", 
      "resistance", 
      "fire_resistance", 
      "water_breathing", 
      "invisibility", 
      "blindness", 
      "night_vision", 
      "hunger", 
      "weakness", 
      "poison", 
      "wither", 
      "health_boost", 
      "absorption", 
      "saturation", 
      "levitation", 
      "fatal_poison", 
      "slow_falling", 
      "conduit_power", 
      "bad_omen", 
      "village_hero‌", 
      "darkness‌"
    ],
    target: ["self", "other", "holder"]
  }

  let teleportEvent = {
    target: ["self", "other", "holder"],
    max_range: {
      x: { min: 1, max: 50 },
      y: { min: 1, max: 50 },
      z: { min: 1, max: 50 }
    }
  }

  let decrementStackEvent = {
    dcrement_stack: ""
  };

  let swingEvent = {
    swing: ""
  }

  let events = [];

  events.push(
    `"run_command": {"command": ["${returnRandomCommand()}"],"target": "other"}`,
    `"damage": {"type": "${damageEvent.type[getRandInt(0, damageEvent.type.length - 1)]}","amount": 4,"target": "${damageEvent.target[getRandInt(0, damageEvent.target.length - 1)]}"}`,
    `"add_mob_effect": {"effect": "${addMobEffectEvent.effect[getRandInt(0, addMobEffectEvent.effect.length - 1)]}","target": "${addMobEffectEvent.target[getRandInt(0, addMobEffectEvent.target.length - 1)]}","duration": ${getRandInt(addMobEffectEvent.duration.min, addMobEffectEvent.duration.max)},"amplifier": ${getRandInt(addMobEffectEvent.amplifier.min, addMobEffectEvent.amplifier.max)}}`,
    `"remove_mob_effect": {"effect": "${removeMobEffectEvent.effect[getRandInt(0, removeMobEffectEvent.effect.length - 1)]}","target": "${removeMobEffectEvent.target[getRandInt(0, removeMobEffectEvent.target.length - 1)]}"}`,
    `"teleport": {"target": "${removeMobEffectEvent.target[getRandInt(0, removeMobEffectEvent.target.length - 1)]}","max_range": [${getRandInt(teleportEvent.max_range.x.min, teleportEvent.max_range.x.max)}, ${getRandInt(teleportEvent.max_range.y.min, teleportEvent.max_range.y.max)}, ${getRandInt(teleportEvent.max_range.z.min, teleportEvent.max_range.z.max)}]}`,
    `"decrement_stack": {}`,
  )

  let event1 = createRandomEvent(3, events); 
  return printEvent(event1, 0);
}