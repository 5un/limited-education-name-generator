'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "https://8zdq4c76j6.execute-api.us-east-1.amazonaws.com/dev";
var shareImage = function shareImage(imageBase64String, cb) {
  var request = require('superagent');
  request.post(API_URL + '/share-image').send({ image: imageBase64String }).end(function (err, res) {
    console.log('shareImage Response');
    console.log(res);
    cb(err, _.get(res, 'body.id'));
  });
};

exports.default = shareImage;