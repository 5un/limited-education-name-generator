'use strict';
const AWS = require('aws-sdk');
const uuidV1 = require('uuid/v1');

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.shareImage = (event, context, callback) => {
  //TODO look at event
  const reqBody = JSON.parse(event.body);

  const fileId = uuidV1();
  const fileName = `${fileId}.jpg`;

  var buf = Buffer.from(reqBody.image, 'base64');
  var s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'photocampaign-storage',
    Key: fileName,
    Body: buf,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        s3Resp: resp,
        id: fileId
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.preorder = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
