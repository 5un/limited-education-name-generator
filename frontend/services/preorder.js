const API_URL = "https://jcf1vfterh.execute-api.us-east-1.amazonaws.com/dev"
const preorder = (preorderInfo, cb) => {
  const request = require('superagent');
    request
      .post(API_URL + '/preorder')
      .send(preorderInfo)
      .end((err, res) => {
        cb(err, _.get(res, 'body'));
      }); 
};

export default preorder;