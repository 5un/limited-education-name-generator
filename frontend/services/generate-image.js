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
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.fill();

    const fontSize = 100;
    ctx.font = `${fontSize}px ${options.fontFamily}`;
    ctx.fillStyle = "black";
    ctx.textAlign="center";
    ctx.fillText(name, w / 2, (h / 2));
    cb(canvas.toDataURL('image/jpeg', 1.0));
  };
  bg.src = '/static/images/mock-tshirt.jpg';
};
export default generateImage;
