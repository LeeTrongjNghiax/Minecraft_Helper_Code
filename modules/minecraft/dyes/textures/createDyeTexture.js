createDyeTexture = (color, side, ctx) => {
  //Outline
  
  ctx.fillStyle = `rgb(${color.r - 82}, ${color.g - 42}, ${color.b - 50})`;
  ctx.fillRect(side * 6, side * 4, side * 4, side * 1);
  ctx.fillRect(side * 4, side * 5, side * 2, side * 1);
  ctx.fillRect(side * 3, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 2, side * 7, side * 1, side * 3);
  ctx.fillRect(side * 3, side * 10, side * 1, side * 1);

  ctx.fillStyle = `rgb(${color.r - 96}, ${color.g - 72}, ${color.b - 94})`;
  ctx.fillRect(side * 10, side * 5, side * 2, side * 1);  
  ctx.fillRect(side * 12, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 13, side * 7, side * 1, side * 3);
  ctx.fillRect(side * 12, side * 10, side * 1, side * 1);
  ctx.fillRect(side * 4, side * 11, side * 2, side * 1);
  ctx.fillRect(side * 10, side * 11, side * 2, side * 1);
  ctx.fillRect(side * 6, side * 12, side * 4, side * 1);
  
  //Inside

  ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
  ctx.fillRect(side * 7, side * 5, side * 2, side * 1);
  ctx.fillRect(side * 6, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 4, side * 7, side * 2, side * 1);
  ctx.fillRect(side * 8, side * 7, side * 2, side * 1); 
  ctx.fillRect(side * 12, side * 7, side * 1, side * 1); 
  ctx.fillRect(side * 4, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 7, side * 8, side * 2, side * 1);
  ctx.fillRect(side * 5, side * 9, side * 3, side * 1);
  ctx.fillRect(side * 11, side * 9, side * 1, side * 1);
  ctx.fillRect(side * 7, side * 11, side * 1, side * 1);

  ctx.fillStyle = `rgb(${color.r + 16}, ${color.g + 17}, ${color.b + 17})`;
  ctx.fillRect(side * 6, side * 5, side * 1, side * 1);
  ctx.fillRect(side * 5, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 8, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 6, side * 7, side * 2, side * 1);
  ctx.fillRect(side * 3, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 6, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 9, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 4, side * 9, side * 1, side * 1);
  ctx.fillRect(side * 6, side * 10, side * 2, side * 1);

  ctx.fillStyle = `rgb(${color.r + 26}, ${color.g + 43}, ${color.b + 28})`
  ctx.fillRect(side * 4, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 7, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 3, side * 7, side * 1, side * 1);
  ctx.fillRect(side * 5, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 8, side * 9, side * 1, side * 1);

  ctx.fillStyle = `rgb(${color.r - 13}, ${color.g - 13}, ${color.b - 13})`
  ctx.fillRect(side * 9, side * 5, side * 1, side * 1);
  ctx.fillRect(side * 9, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 11, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 10, side * 7, side * 1, side * 3);
  ctx.fillRect(side * 12, side * 8, side * 1, side * 1);
  ctx.fillRect(side * 3, side * 9, side * 1, side * 1);
  ctx.fillRect(side * 4, side * 10, side * 2, side * 1);
  ctx.fillRect(side * 8, side * 10, side * 2, side * 1);
  ctx.fillRect(side * 6, side * 11, side * 1, side * 1);
  ctx.fillRect(side * 9, side * 11, side * 1, side * 1);

  ctx.fillStyle = `rgb(${color.r - 29}, ${color.g - 26}, ${color.b - 28})`
  ctx.fillRect(side * 10, side * 6, side * 1, side * 1);
  ctx.fillRect(side * 11, side * 7, side * 1, side * 2);
  ctx.fillRect(side * 9, side * 9, side * 1, side * 1);
  ctx.fillRect(side * 12, side * 9, side * 1, side * 1);
  ctx.fillRect(side * 10, side * 10, side * 2, side * 1);
  ctx.fillRect(side * 8, side * 11, side * 1, side * 1);
}