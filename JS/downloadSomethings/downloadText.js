downloadText = (fileName, content) => {
  let link = document.createElement('a');
  link.download = fileName;
  
  let blob = new Blob([content], {type: 'text/plain'});

  link.href = URL.createObjectURL(blob);

  link.click();

  URL.revokeObjectURL(link.href);
}