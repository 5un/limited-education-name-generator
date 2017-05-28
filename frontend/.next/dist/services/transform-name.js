'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformations = [{ from: 'ช', fn: function fn(name) {
    return name.replace(/ช/i, 'ข');
  } }, { from: 'ข', fn: function fn(name) {
    return name.replace(/ข/i, 'ช');
  } }, { from: 'า', fn: function fn(name) {
    return name.replace(/า/i, 'ว');
  } }, { from: 'ว', fn: function fn(name) {
    return name.replace(/ว/i, 'า');
  } }, { from: 'ั', fn: function fn(name) {
    return name.replace(/ั/i, 'ิ');
  } }, { from: 'ิ', fn: function fn(name) {
    return name.replace(/ิ/i, 'ั');
  } }, { from: 'ี', fn: function fn(name) {
    return name.replace(/ี/i, 'ิ');
  } }, { from: 'ิ', fn: function fn(name) {
    return name.replace(/ิ/i, 'ี');
  } }, { from: 'พ', fn: function fn(name) {
    return name.replace(/พ/i, 'ผ');
  } }, { from: 'ผ', fn: function fn(name) {
    return name.replace(/ผ/i, 'พ');
  } }, { from: 'า', fn: function fn(name) {
    return name.replace(/า/i, 'าา');
  } }, { from: 'ข', fn: function fn(name) {
    return name.replace(/ข/i, 'ป');
  } }, { from: 'ข', fn: function fn(name) {
    return name.replace(/ข/i, 'บ');
  } }, { from: 'บ', fn: function fn(name) {
    return name.replace(/บ/i, 'ข');
  } }, { from: 'ป', fn: function fn(name) {
    return name.replace(/ป/i, 'ข');
  } }, { from: 'บ', fn: function fn(name) {
    return name.replace(/บ/i, 'ป');
  } }, { from: 'ป', fn: function fn(name) {
    return name.replace(/ป/i, 'บ');
  } }, { from: 'ด', fn: function fn(name) {
    return name.replace(/ด/i, 'ค');
  } }, { from: 'ค', fn: function fn(name) {
    return name.replace(/ค/i, 'ด');
  } }, { from: 'ส', fn: function fn(name) {
    return name.replace(/ส/i, 'ล');
  } }, { from: 'ล', fn: function fn(name) {
    return name.replace(/ล/i, 'ส');
  } }, { from: 'แ', fn: function fn(name) {
    return name.replace(/แ/i, 'เ');
  } }, { from: 'เ', fn: function fn(name) {
    return name.replace(/เ/i, 'แ');
  } }, { from: 'ท', fn: function fn(name) {
    return name.replace(/ท/i, 'ห');
  } }, { from: 'ห', fn: function fn(name) {
    return name.replace(/ห/i, 'ท');
  } }, { from: 'ก', fn: function fn(name) {
    return name.replace(/ก/i, 'า');
  } }, { from: 'า', fn: function fn(name) {
    return name.replace(/า/i, 'ก');
  } }, { from: 'อ', fn: function fn(name) {
    return name.replace(/อ/i, 'ว');
  } }, { from: 'ว', fn: function fn(name) {
    return name.replace(/ว/i, 'อ');
  } }, { from: 'ก', fn: function fn(name) {
    return name.replace(/ก/i, 'ท');
  } }];

var transformName = function transformName(name) {
  var outName = name;
  var numErrors = Math.ceil(name.length / 5);
  var potentialTransformations = _lodash2.default.shuffle(_lodash2.default.filter(transformations, function (t) {
    return name.indexOf(t.from) > -1;
  }));
  console.log(potentialTransformations);
  _lodash2.default.forEach(potentialTransformations, function (t, i) {
    console.log(t);
    if (i < numErrors) {
      outName = t.fn(outName);
    }
  });
  return outName;
};
exports.default = transformName;