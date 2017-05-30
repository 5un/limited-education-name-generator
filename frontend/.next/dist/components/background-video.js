'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var containerStyle = {
        position: 'fixed',
        left: 0,
        top: 0
      };

      var videoStyle = {
        position: 'fixed',
        top: 0,
        margin: 'auto',
        minWidth: '100vw',
        minHeight: '100vh'

      };

      var overlayStyle = {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        height: '150%',
        position: 'fixed',
        left: 0,
        top: 0
      };

      return _react2.default.createElement('div', { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('video', { autoPlay: true, style: videoStyle, loop: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('source', { src: '/static/videos/video-1496047826.mp4', type: 'video/mp4', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement('div', { style: overlayStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;