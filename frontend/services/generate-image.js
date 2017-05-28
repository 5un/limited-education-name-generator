const generateImage = (name, cb) => {
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
    ctx.font = `${fontSize}px limited_education`;
    ctx.fillStyle = "black";
    ctx.textAlign="center";
    ctx.fillText(name, w / 2, (h / 2));
    cb(canvas.toDataURL('image/jpeg', 1.0));
  };
  bg.src = '/static/images/mock-tshirt.jpg';
};
export default generateImage;