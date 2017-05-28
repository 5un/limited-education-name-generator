"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateTShirt = function generateTShirt(name, cb) {
  var bg = new Image();
  bg.onload = function (e) {
    console.log(e);
    var canvas = document.createElement('canvas');
    var w = 1200;
    var h = 630;
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(bg, 0, 0, w, h);
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.fill();

    var fontSize = 100;
    ctx.font = fontSize + "px limited_education";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(name, w / 2, h / 2);
    cb(canvas.toDataURL('image/jpeg', 1.0));
  };
  bg.src = '/static/images/mock-tshirt.jpg';
};
exports.default = generateTShirt;