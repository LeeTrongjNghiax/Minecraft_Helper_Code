const pSBC=(p,c0,c1,l)=>{
  let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
  if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
  if(!this.pSBCr)this.pSBCr=(d)=>{
      let n=d.length,x={};
      if(n>9){
          [r,g,b,a]=d=d.split(","),n=d.length;
          if(n<3||n>4)return null;
          x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
      }else{
          if(n==8||n==6||n<4)return null;
          if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
          d=i(d.slice(1),16);
          if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
          else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
      }return x};
  h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
  if(!f||!t)return null;
  if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
  else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
  a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
  if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
  else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

addColors = (...color) => {
  let colorSum = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };

  for (let i of color) {
    colorSum.r += i.r;
    colorSum.g += i.g;
    colorSum.b += i.b;
  }

  return colorSum;
}

averageColors = (...color) => {
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

componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

rgbToHex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

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

        ctx.fillStyle = `rgba(
          ${averageColors(imagePixel2[i][j], color).r}, 
          ${averageColors(imagePixel2[i][j], color).g}, 
          ${averageColors(imagePixel2[i][j], color).b}, 
          ${imagePixel2[i][j].a}
        )`;

        // ctx.fillStyle = `rgba(
        //   ${addColors(imagePixel2[i][j], color).r}, 
        //   ${addColors(imagePixel2[i][j], color).g}, 
        //   ${addColors(imagePixel2[i][j], color).b}, 
        //   ${imagePixel2[i][j].a}
        // )`;

        // ctx.fillStyle = pSBC( -0.5, `rgb(
        //   ${imagePixel2[i][j].r},
        //   ${imagePixel2[i][j].g},
        //   ${imagePixel2[i][j].b}
        // )`)

        // ctx.fillStyle = pSBC( 0.7, `rgb(
        //   ${imagePixel2[i][j].r},
        //   ${imagePixel2[i][j].g},
        //   ${imagePixel2[i][j].b}
        // )`, `rgb(
        //   ${color.r},
        //   ${color.g},
        //   ${color.b}
        // )`, true)

        // ctx.fillStyle = `rgba(
        //   ${imagePixel2[i][j].r}, 
        //   ${imagePixel2[i][j].g}, 
        //   ${imagePixel2[i][j].b},
        //   ${imagePixel2[i][j].a}
        // )`;

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