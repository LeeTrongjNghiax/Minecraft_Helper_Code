addColors = (...color) => {
  let colorSum = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  let count = 0;

  for (let i of color) {
    colorSum.r += i.r;
    colorSum.g += i.g;
    colorSum.b += i.b;
    count++;
  }

  colorSum.r = Math.round(colorSum.r / count);
  colorSum.g = Math.round(colorSum.g / count);
  colorSum.b = Math.round(colorSum.b / count);

  return colorSum;
}

hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

readImageToArray = (ev, imagePixel, ctx) => {
  let image = new Image();
  if(ev.target.files) {
    let file = ev.target.files[0];
    var reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      image.src = e.target.result;
      image.onload = function(ev) {
        ctx.drawImage(image, 0, 0);
        for (let i = 0; i < side; i++) {
          imagePixel[i] = [];
        }

        for (let i = 0; i < side; i++) {
          for (let j = 0; j < side; j++) {
            if (checkIfPixelIsEmpty(ctx, i, j, 1, 1)) {
              imagePixel[i][j] = null;
            } else {
              imageData = ctx.getImageData(i, j, 1, 1);
              imagePixel[i][j] = new Color(imageData.data[0], 
                                            imageData.data[1], 
                                            imageData.data[2], 
                                            imageData.data[3] / 255);
            }
          }        
        } 
      }
    }
  }
}

drawImages = (imagePixel, side, multiple, max, cv, effects) => {
  let p1, p2, p3;
  let ctx1, ctx2, ctx3;
  let i = 0;
  let j = 0;

  while (i <= max) {
    p1 = document.createElement("p");
    cv[i] = document.createElement("canvas");
    cv[i].width = multiple * side;
    cv[i].height = multiple * side;
    ctx1 = cv[i].getContext("2d");
    drawImageFromArray(
      ctx1, 
      imagePixel, 
      effects[j].color.regular,
      multiple,
      //isAddPixelSword
    );
    p1.innerHTML = i + " " + effects[j].name;
    document.body.appendChild(cv[i]);
    document.body.appendChild(p1);
    i++;


    if (effects[j].color.long != null) {
      p2 = document.createElement("p");
      cv[i] = document.createElement("canvas");
      cv[i].width = multiple * side;
      cv[i].height = multiple * side;
      ctx2 = cv[i].getContext("2d");
      drawImageFromArray(
        ctx2, 
        imagePixel, 
        effects[j].color.long,
        multiple,
        //isAddPixelSword
      );
      p2.innerHTML = i + " " + effects[j].name + " long";
      document.body.appendChild(cv[i]);
      document.body.appendChild(p2);
      i++;
    }
    if (effects[j].color.strong != null) {
      p3 = document.createElement("p");
      cv[i] = document.createElement("canvas");
      cv[i].width = multiple * side;
      cv[i].height = multiple * side;
      ctx3 = cv[i].getContext("2d");
      drawImageFromArray(
        ctx3, 
        imagePixel, 
        effects[j].color.strong,
        multiple,
        //isAddPixelSword
      );
      p3.innerHTML = i + " " + effects[j].name + " strong";
      document.body.appendChild(cv[i]);
      document.body.appendChild(p3);
      i++;
    }
    j++;
  }
}

drawImageFromArray = (ctx, imagePixel2, color, side) => {
  for (let i = 0; i < imagePixel2.length; i++) {
    for (let j = 0; j < imagePixel2[i].length; j++) {
      if (imagePixel2[i][j] != null) {
        // if (isAddPixelSword[j][i] == 0) {
        //   ctx.fillStyle = `rgba(${imagePixel2[j][i].r + color.r}, 
        //                         ${imagePixel2[j][i].g + color.g}, 
        //                         ${imagePixel2[j][i].b + color.b}, 
        //                         ${imagePixel2[j][i].a})`;
        // } else {
        //   ctx.fillStyle = `rgba(${imagePixel2[j][i].r}, 
        //                         ${imagePixel2[j][i].g}, 
        //                         ${imagePixel2[j][i].b}, 
        //                         ${imagePixel2[j][i].a})`;
        // }
        // ctx.fillStyle = `rgba(${imagePixel2[i][j].r + color.r + getRandInt(-maxD, maxD)}, 
        //   ${imagePixel2[i][j].g + color.g + getRandInt(-maxD, maxD)}, 
        //   ${imagePixel2[i][j].b + color.b + getRandInt(-maxD, maxD)}, 
        //   ${imagePixel2[i][j].a})`;

        // ctx.fillStyle = `rgba(${addColors(imagePixel2[i][j], color).r}, 
        //   ${addColors(imagePixel2[i][j], color).g}, 
        //   ${addColors(imagePixel2[i][j], color).b},
        //   ${imagePixel2[i][j].a})`;

          ctx.fillStyle = `rgba(${imagePixel2[i][j].r}, 
            ${imagePixel2[i][j].g}, 
            ${imagePixel2[i][j].b},
            ${imagePixel2[i][j].a})`;

        ctx.fillRect(side * i, side * j, side, side);
      }
    }
  }
}

checkIfPixelIsEmpty = (ctx, x, y, w, h) => {
  let idata = ctx.getImageData(x, y, w, h),      // needed as usual ...
  u32 = new Uint32Array(idata.data.buffer),  // reads 1x uint32 instead of 4x uint8
  i = 0, len = u32.length;

  while(i < len) 
    if (u32[i++]) return false;     // if !== 0 return false, not empty
  return true                                    // all empty, all OK
}

function drawImageURLOnCanvas(strDataURI, canvas) {
  "use strict";
  var img = new window.Image();
  img.addEventListener("load", function () {
      canvas.getContext("2d").drawImage(img, 0, 0);
  });
  img.setAttribute("src", strDataURI);
}