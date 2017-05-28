const API_URL = "https://jcf1vfterh.execute-api.us-east-1.amazonaws.com/dev"
const shareImage = (imageBase64String, cb) => {
  const request = require('superagent');
    request
      .post(API_URL + '/share-image')
      .send({ image: imageBase64String })
      .end((err, res) => {
        console.log('shareImage Response');
        console.log(res);
        cb(err, _.get(res, 'body.id'));
      }); 
};

export default shareImage;