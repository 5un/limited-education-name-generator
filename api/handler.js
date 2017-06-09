'use strict';
const AWS = require('aws-sdk');
const uuidV1 = require('uuid/v1');
const request = require('superagent');

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
  var onlineFormId = '1FAIpQLSfxJHX1J1dsA2uVIqn71Dr8s8fIMdz01E4PFEXpo6DdFEwIJg';
  var eventFormId = '1FAIpQLScXJ_QSgMyfFP0oPqYIVnbAFgEhyQ8yS6VthLbFI4UnVDgLEg';
  var secretKey = 'gIepxG26bkidrmqBlDgEfviqCiZ1ALJ3';

  var token = ''
  var fields = {
    inputName: 'entry.249523100',
    outputName: 'entry.2011678698',
    fontName: 'entry.1424370217',
    shareid: 'entry.1939750432',
    type: 'entry.1115514336',
    size: 'entry.1721541334',
    sizeOther: 'entry.1721541334.other_option_response',
    email: 'entry.1414359800',
    mobile: 'entry.1534391001',
    delivery_method: 'entry.1215248009',
    delivery_name: 'entry.153686678',
    address: 'entry.1445466410'
  }

  const reqBody = JSON.parse(event.body);

  // Authentication Guard
  const isEvent = reqBody.mode && (reqBody.mode === 'event');
  if(isEvent) {
    if (!(reqBody.key && (reqBody.key === secretKey))) {
      const response = {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Preorder failed because of invalid key code',
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      callback(null, response);
      return;
    }
  }

  // Form Submitting
  const formId = isEvent ? eventFormId : onlineFormId;
  const formData = isEvent ? { 
      [fields.inputName]: reqBody.input_name,
      [fields.outputName]: reqBody.output_name,
      [fields.fontName]: reqBody.font_name,
      [fields.shareid]: reqBody.share_id,
      [fields.type]: reqBody.type,
      [fields.size]: reqBody.size,
      [fields.sizeOther]: reqBody.size_other,
      [fields.email]: reqBody.email,
      [fields.delivery_method]: reqBody.delivery_method,
      [fields.mobile]: reqBody.mobile,
      [fields.address]: reqBody.address,
      [fields.delivery_name]: reqBody.delivery_name
    } :
    { 
      [fields.inputName]: reqBody.input_name,
      [fields.outputName]: reqBody.output_name,
      [fields.fontName]: reqBody.font_name,
      [fields.shareid]: reqBody.share_id,
      [fields.type]: reqBody.type,
      [fields.size]: reqBody.size,
      [fields.sizeOther]: reqBody.size_other,
      [fields.email]: reqBody.email,
      [fields.delivery_method]: reqBody.delivery_method,
      [fields.mobile]: reqBody.mobile,
      [fields.address]: reqBody.address
    };


  request
    .post(`https://docs.google.com/forms/d/e/${formId}/formResponse`)
    .type('form')
    .send(formData)
    .end(function(err, res){
      if (err || !res.ok) {
        const response = {
          statusCode: 400,
          body: JSON.stringify({
            success: false,
            message: 'Preorder failed because of an unknown issue',
          }),
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };
        callback(null, response);
      } else {
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            message: 'Preorder succeed',
          }),
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };

        callback(null, response);
      }
    });

};
