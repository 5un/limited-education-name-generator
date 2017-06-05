const generateImage = (name, options, cb) => {
  const bg = new Image();
  bg.onload = (e) => {
    console.log(e);
    const canvas = document.createElement('canvas');
    const w = 1200;
    const h = 630;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bg, 0, 0, w, h);

    const fontSize = 100;
    ctx.font = `${fontSize}px ${options.fontFamily}`;
    ctx.fillStyle = "black";
    ctx.textAlign="center";
    ctx.fillText(name, w / 2, (h / 2));

    if (options.childrenName) {
      const fontSize = 36;
      ctx.font = `${fontSize}px DBHelvethaicaXRegular`;
      ctx.fillStyle = "#808184";
      ctx.textAlign="center";
      ctx.fillText(`Designed by ${options.childrenName}`, w / 2, (h / 2) + 50);
    }
    
    cb(canvas.toDataURL('image/jpeg', 1.0));
  };
  bg.src = '/static/images/bg-shirt.jpg';
};
export default generateImage;
