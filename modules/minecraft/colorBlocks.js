let colors = [];
let cv = [];
let ctx = [];
let namespace = `cb`;

addShade = (color) => {
  return {
    r: color[0] - 224,
    g: color[1] - 174,
    b: color[2] - 93
  }
}

drawShade = (ctx, side) => {
  // for (let i = 0; i < side; i++) {
  //   for (let j = 0; j < side; j++) {
  //     let pixelData = ctx.getImageData(i, j, 1, 1).data; 
  //     ctx.fillStyle = `rgb(${pixelData[0] + 31}, ${pixelData[1] + 81}, ${pixelData[2] + 162})`;
  //     ctx.fillRect(i, j, 1, 1);
  //   }
  // }
  let pixelData = ctx.getImageData(4, 4, 4, 4).data; 
  console.log(pixelData)
}

class colorBlock{
  constructor(hex, id, name, color) {
    this.hex = hex;
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

colors.push(
  new colorBlock("#000000", "Black", "Black"),
  new colorBlock("#000080", "Navy", "Navy"),
  new colorBlock("#00008B", "DarkBlue", "Dark Blue"),
  new colorBlock("#0000CD", "MediumBlue", "Medium Blue"),
  new colorBlock("#0000FF", "Blue", "Blue"),
  new colorBlock("#006400", "DarkGreen", "Dark Green"),
  new colorBlock("#008000", "Green", "Green"),
  new colorBlock("#008080", "Teal", "Teal"),
  new colorBlock("#008B8B", "DarkCyan", "Dark Cyan"),
  new colorBlock("#00BFFF", "DeepSkyBlue", "Deep Sky Blue"),
  new colorBlock("#00CED1", "DarkTurquoise", "Dark Turquoise"),
  new colorBlock("#00FA9A", "MediumSpringGreen", "Medium Spring Green"),
  new colorBlock("#00FF00", "Lime", "Lime"),
  new colorBlock("#00FF7F", "SpringGreen", "Spring Green"),
  new colorBlock("#00FFFF", "Aqua", "Aqua"),
  new colorBlock("#00FFFF", "Cyan", "Cyan"),
  new colorBlock("#191970", "MidnightBlue", "Midnight Blue"),
  new colorBlock("#1E90FF", "DodgerBlue", "Dodger Blue"),
  new colorBlock("#20B2AA", "LightSeaGreen", "Light Sea Green"),
  new colorBlock("#228B22", "ForestGreen", "Forest Green"),
  new colorBlock("#2E8B57", "SeaGreen", "Sea Green"),
  new colorBlock("#2F4F4F", "DarkSlateGray", "Dark Slate Gray"),
  new colorBlock("#2F4F4F", "DarkSlateGrey", "Dark Slate Grey"),
  new colorBlock("#32CD32", "LimeGreen", "Lime Green"),
  new colorBlock("#3CB371", "MediumSeaGreen", "Medium Sea Green"),
  new colorBlock("#40E0D0", "Turquoise", "Turquoise"),
  new colorBlock("#4169E1", "RoyalBlue", "Royal Blue"),
  new colorBlock("#4682B4", "SteelBlue", "Steel Blue"),
  new colorBlock("#483D8B", "DarkSlateBlue", "Dark Slate Blue"),
  new colorBlock("#48D1CC", "MediumTurquoise", "Medium Turquoise"),
  new colorBlock("#4B0082", "Indigo", "Indigo"),
  new colorBlock("#556B2F", "DarkOliveGreen", "Dark Olive Green"),
  new colorBlock("#5F9EA0", "CadetBlue", "Cadet Blue"),
  new colorBlock("#6495ED", "CornflowerBlue", "Cornflower Blue"),
  new colorBlock("#663399", "RebeccaPurple", "Rebecca Purple"),
  new colorBlock("#66CDAA", "MediumAquaMarine", "Medium Aqua Marine"),
  new colorBlock("#696969", "DimGray", "Dim Gray"),
  new colorBlock("#696969", "DimGrey", "Dim Grey"),
  new colorBlock("#6A5ACD", "SlateBlue", "Slate Blue"),
  new colorBlock("#6B8E23", "OliveDrab", "Olive Drab"),
  new colorBlock("#708090", "SlateGray", "Slate Gray"),
  new colorBlock("#708090", "SlateGrey", "Slate Grey"),
  new colorBlock("#778899", "LightSlateGray", "Light Slate Gray"),
  new colorBlock("#778899", "LightSlateGrey", "Light Slate Grey"),
  new colorBlock("#7B68EE", "MediumSlateBlue", "Medium Slate Blue"),
  new colorBlock("#7CFC00", "LawnGreen", "Lawn Green"),
  new colorBlock("#7FFF00", "Chartreuse", "Chartreuse"),
  new colorBlock("#7FFFD4", "Aquamarine", "Aquamarine"),
  new colorBlock("#800000", "Maroon", "Maroon"),
  new colorBlock("#800080", "Purple", "Purple"),
  new colorBlock("#808000", "Olive", "Olive"),
  new colorBlock("#808080", "Gray", "Gray"),
  new colorBlock("#808080", "Grey", "Grey"),
  new colorBlock("#87CEEB", "SkyBlue", "Sky Blue"),
  new colorBlock("#87CEFA", "LightSkyBlue", "Light Sky Blue"),
  new colorBlock("#8A2BE2", "BlueViolet", "Blue Violet"),
  new colorBlock("#8B0000", "DarkRed", "Dark Red"),
  new colorBlock("#8B008B", "DarkMagenta", "Dark Magenta"),
  new colorBlock("#8B4513", "SaddleBrown", "Saddle Brown"),
  new colorBlock("#8FBC8F", "DarkSeaGreen", "Dark Sea Green"),
  new colorBlock("#90EE90", "LightGreen", "Light Green"),
  new colorBlock("#9370DB", "MediumPurple", "Medium Purple"),
  new colorBlock("#9400D3", "DarkViolet", "Dark Violet"),
  new colorBlock("#98FB98", "PaleGreen", "Pale Green"),
  new colorBlock("#9932CC", "DarkOrchid", "Dark Orchid"),
  new colorBlock("#9ACD32", "YellowGreen", "Yellow Green"),
  new colorBlock("#A0522D", "Sienna", "Sienna"),
  new colorBlock("#A52A2A", "Brown", "Brown"),
  new colorBlock("#A9A9A9", "DarkGray", "Dark Gray"),
  new colorBlock("#A9A9A9", "DarkGrey", "Dark Grey"),
  new colorBlock("#ADD8E6", "LightBlue", "Light Blue"),
  new colorBlock("#ADFF2F", "GreenYellow", "Green Yellow"),
  new colorBlock("#AFEEEE", "PaleTurquoise", "Pale Turquoise"),
  new colorBlock("#B0C4DE", "LightSteelBlue", "Light Steel Blue"),
  new colorBlock("#B0E0E6", "PowderBlue", "Powder Blue"),
  new colorBlock("#B22222", "FireBrick", "Fire Brick"),
  new colorBlock("#B8860B", "DarkGoldenRod", "Dark Golden Rod"),
  new colorBlock("#BA55D3", "MediumOrchid", "Medium Orchid"),
  new colorBlock("#BC8F8F", "RosyBrown", "Rosy Brown"),
  new colorBlock("#BDB76B", "DarkKhaki", "Dark Khaki"),
  new colorBlock("#C0C0C0", "Silver", "Silver"),
  new colorBlock("#C71585", "MediumVioletRed", "Medium Violet Red"),
  new colorBlock("#CD5C5C", "IndianRed", "Indian Red"),
  new colorBlock("#CD853F", "Peru", "Peru"),
  new colorBlock("#D2691E", "Chocolate", "Chocolate"),
  new colorBlock("#D2B48C", "Tan", "Tan"),
  new colorBlock("#D3D3D3", "LightGray", "Light Gray"),
  new colorBlock("#D3D3D3", "LightGrey", "Light Grey"),
  new colorBlock("#D8BFD8", "Thistle", "Thistle"),
  new colorBlock("#DA70D6", "Orchid", "Orchid"),
  new colorBlock("#DAA520", "GoldenRod", "Golden Rod"),
  new colorBlock("#DB7093", "PaleVioletRed", "Pale Violet Red"),
  new colorBlock("#DC143C", "Crimson", "Crimson"),
  new colorBlock("#DCDCDC", "Gainsboro", "Gainsboro"),
  new colorBlock("#DDA0DD", "Plum", "Plum"),
  new colorBlock("#DEB887", "BurlyWood", "Burly Wood"),
  new colorBlock("#E0FFFF", "LightCyan", "Light Cyan"),
  new colorBlock("#E6E6FA", "Lavender", "Lavender"),
  new colorBlock("#E9967A", "DarkSalmon", "Dark Salmon"),
  new colorBlock("#EE82EE", "Violet", "Violet"),
  new colorBlock("#EEE8AA", "PaleGoldenRod", "Pale Golden Rod"),
  new colorBlock("#F08080", "LightCoral", "Light Coral"),
  new colorBlock("#F0E68C", "Khaki", "Khaki"),
  new colorBlock("#F0F8FF", "AliceBlue", "Alice Blue"),
  new colorBlock("#F0FFF0", "HoneyDew", "Honey Dew"),
  new colorBlock("#F0FFFF", "Azure", "Azure"),
  new colorBlock("#F4A460", "SandyBrown", "Sandy Brown"),
  new colorBlock("#F5DEB3", "Wheat", "Wheat"),
  new colorBlock("#F5F5DC", "Beige", "Beige"),
  new colorBlock("#F5F5F5", "WhiteSmoke", "White Smoke"),
  new colorBlock("#F5FFFA", "MintCream", "Mint Cream"),
  new colorBlock("#F8F8FF", "GhostWhite", "Ghost White"),
  new colorBlock("#FA8072", "Salmon", "Salmon"),
  new colorBlock("#FAEBD7", "AntiqueWhite", "Antique White"),
  new colorBlock("#FAF0E6", "Linen", "Linen"),
  new colorBlock("#FAFAD2", "LightGoldenRodYellow", "Light Golden Rod Yellow"),
  new colorBlock("#FDF5E6", "OldLace", "Old Lace"),
  new colorBlock("#FF0000", "Red", "Red"),
  new colorBlock("#FF00FF", "Fuchsia", "Fuchsia"),
  new colorBlock("#FF00FF", "Magenta", "Magenta"),
  new colorBlock("#FF1493", "DeepPink", "Deep Pink"),
  new colorBlock("#FF4500", "OrangeRed", "Orange Red"),
  new colorBlock("#FF6347", "Tomato", "Tomato"),
  new colorBlock("#FF69B4", "HotPink", "Hot Pink"),
  new colorBlock("#FF7F50", "Coral", "Coral"),
  new colorBlock("#FF8C00", "DarkOrange", "Dark Orange"),
  new colorBlock("#FFA07A", "LightSalmon", "Light Salmon"),
  new colorBlock("#FFA500", "Orange", "Orange"),
  new colorBlock("#FFB6C1", "LightPink", "Light Pink"),
  new colorBlock("#FFC0CB", "Pink", "Pink"),
  new colorBlock("#FFD700", "Gold", "Gold"),
  new colorBlock("#FFDAB9", "PeachPuff", "Peach Puff"),
  new colorBlock("#FFDEAD", "NavajoWhite", "Navajo White"),
  new colorBlock("#FFE4B5", "Moccasin", "Moccasin"),
  new colorBlock("#FFE4C4", "Bisque", "Bisque"),
  new colorBlock("#FFE4E1", "MistyRose", "Misty Rose"),
  new colorBlock("#FFEBCD", "BlanchedAlmond", "Blanched Almond"),
  new colorBlock("#FFEFD5", "PapayaWhip", "Papaya Whip"),
  new colorBlock("#FFF0F5", "LavenderBlush", "Lavender Blush"),
  new colorBlock("#FFF5EE", "SeaShell", "Sea Shell"),
  new colorBlock("#FFF8DC", "Cornsilk", "Cornsilk"),
  new colorBlock("#FFFACD", "LemonChiffon", "Lemon Chiffon"),
  new colorBlock("#FFFAF0", "FloralWhite", "Floral White"),
  new colorBlock("#FFFAFA", "Snow", "Snow"),
  new colorBlock("#FFFF00", "Yellow", "Yellow"),
  new colorBlock("#FFFFE0", "LightYellow", "Light Yellow"),
  new colorBlock("#FFFFF0", "Ivory", "Ivory"),
  new colorBlock("#FFFFFF", "White", "White")
)

encodeText2 = (text) => {
  let text2 = text.match(/"[^"]+"/g);

  return text2;
}

function urlToPromise(url) {
  return new Promise(function(resolve, reject) {
    JSZipUtils.getBinaryContent(url, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

for (let i = 0; i < colors.length; i++) {
  colors[i].id = colors[i].id.toLowerCase();
  colors[i].color = hexToRgb(colors[i].hex);
}

let side = 1

for (let i = 0; i < 1; i++) {
  let p = document.createElement("p");
  p.innerHTML = `${colors[i].name} (${colors[i].hex})`;
  p.style.margin = 0;
  p.style.padding = 0;
  //document.body.appendChild(p);

  cv[i] = document.createElement("canvas");
  cv[i].width = side * 128;
  cv[i].height = side * 128;

  ctx[i] = cv[i].getContext("2d");
  drawShade(ctx[i], side * 128);
  document.body.appendChild(cv[i]);
  console.log(ctx[i]);

  // cv[i].addEventListener("mousemove", () => {        
  //   var pixelData = cv[i].getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data; 
  //   document.querySelector("#output").innerHTML = ('R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);
  // })
}

let pool1 = `{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "loot_table",
          "name": "loot_tables/gameplay/fishing/random.json",
          "weight": 100,
          "quality": 100
        }
      ]
    }
  ]
}`

let pool2 = `{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "loot_table",
          "name": "loot_tables/village_template2.json",
          "weight": 1,
          "quality": 1
        }
      ]
    }
  ]
}`

let text5 = `{
  "format_version": "1.8.0",
  "minecraft:entity": {
    "description": {
      "identifier": "minecraft:fishing_hook",
      "is_spawnable": false,
      "is_summonable": false,
      "is_experimental": false
    },
    "components": {
      "minecraft:collision_box": {
        "width": 0.15,
        "height": 0.15
      },
      "minecraft:projectile": {
        "onHit": { "stick_in_ground": {} }
      },
      "minecraft:loot": {
        "table": "loot_tables/gameplay/fishing.json"
      },
      "minecraft:physics": {
      }
    }
  }
}`

generateZip = () => {
  var zip = new JSZip();
  let prefixs = [`bookshelf`, `concrete`, `glass`, `plank`, `slab`, `stair`];
  
  // for (let i = 0; i < colors.lootTableName; i++) {
  //   //JSZip download text
  //   //zip.file(`${lootTableName[i]}.json`, encodeText() );
    
  //   //JSZip download canvas image
  //   //zip.file(`glass_${colors[i].id}.png`, urlToPromise(flipbook_canvas.toDataURL()), {binary: true});
  // }

  // zip.file(`concrete.png`, urlToPromise( flipbook_canvas.toDataURL() ), {binary: true} );

  //zip.file();

  let id = `window1_left_top`;
  let letter_a = `a`;
  let letter_b = `b`;

  for (let i = 1; i <= 6; i++) {
    zip.file(`${id}_${letter_a}${i}.json`, deleteSpace(encodeText(shaderBlock(`cb`, id, letter_a, id, i))) ); 
  }

  for (let i = 1; i <= 6; i++) {
    zip.file(`${id}_${letter_b}${i}.json`, deleteSpace(encodeText(shaderBlock(`cb`, id, letter_b, id, i))) ); 
  }

  zip.generateAsync( {type: "blob"} ).then(function callback(blob) {
    saveAs(blob, `${id}.zip`);
  });
}

generateText = () => {
  let count = 5;
  let quantity = 36;
  let prefix = `stair`;
  let begin = quantity * (count - 1);
  let end = (count * quantity < colors.length) ? quantity * count - 1 : colors.length - 1;

  downloadText(`fishing_hook.json`, (encodeText(text5)) );

}

//console.table(colors);     
console.log(shaderBlock(`cb`, `line_right`, `a`, `line_right`, 1))

let seeds = [`1918206077`, `-1277040098`, `162999298`];