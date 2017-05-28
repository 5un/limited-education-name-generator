'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _backgroundVideo = require('../components/background-video');

var _backgroundVideo2 = _interopRequireDefault(_backgroundVideo);

var _transformName = require('../services/transform-name');

var _transformName2 = _interopRequireDefault(_transformName);

var _generateTshirt = require('../services/generate-tshirt');

var _generateTshirt2 = _interopRequireDefault(_generateTshirt);

var _shareImage = require('../services/share-image');

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = require('react-inlinesvg');

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js?entry';


var sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { step: 0 };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'onGenerateClick',
    value: function onGenerateClick() {
      var _this2 = this;

      (0, _generateTshirt2.default)(this.state.outputName, function (imgUrl) {
        _this2.setState({ step: 1, outputImageUrl: imgUrl });
      });
    }
  }, {
    key: 'onTextNameChage',
    value: function onTextNameChage(e) {
      var val = e.target.value;
      this.setState({ inputName: val, outputName: (0, _transformName2.default)(val) });
    }
  }, {
    key: 'onBackClick',
    value: function onBackClick() {
      this.setState({ step: 0, inputName: '', outputName: '' });
    }
  }, {
    key: 'onBuyClick',
    value: function onBuyClick() {
      //TODO Open Google Forms Page
      this.setState({ step: 2 });
    }
  }, {
    key: 'onShareClick',
    value: function onShareClick() {
      var _this3 = this;

      // TODO Upload image to the service and get the id response
      // Set the share link
      // Open FB Dialog
      var imageBase64String = this.state.outputImageUrl.split(',').pop();
      (0, _shareImage2.default)(imageBase64String, function (err, sharedId) {
        console.log(sharedId);
        if (err) {
          // Handle error
        } else {
          _this3.setState({ sharedLink: '/?share_id' + sharedId });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //console.log(this.props.url.query);
      // TODO fetch the share url here
      // TODO put customized head
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_backgroundVideo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('div', { className: 'page-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h1', { className: 'page-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, '\u0E25\u0E34\u0E21\u0E34\u0E40\u0E15\u0E47\u0E14 \u0E40\u0E2D\u0E47\u0E14\u0E14\u0E39\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19'), _react2.default.createElement('div', { className: 'sub-header-svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_reactInlinesvg2.default, { src: '/static/images/limited-education-text-eng.svg', style: { height: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), this.state.step === 0 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onTextNameChage.bind(this), placeholder: '\u0E42\u0E1B\u0E23\u0E14\u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07...', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('button', { className: 'btn-blue', onClick: this.onGenerateClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, '\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25')), this.state.step === 1 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('img', { src: this.state.outputImageUrl, className: 'preview-generated-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, '\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E25\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E47\u0E01\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E43\u0E19\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E44\u0E1B\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E01\u0E34\u0E42\u0E25'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, '\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A'), _react2.default.createElement('a', { className: 'btn', href: this.state.outputImageUrl, download: 'output.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, '\u0E42\u0E2B\u0E25\u0E14'), _react2.default.createElement('button', { onClick: this.onShareClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, '\u0E41\u0E0A\u0E23\u0E4C'), _react2.default.createElement('button', { onClick: this.onBuyClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, '\u0E2A\u0E37\u0E48\u0E2D\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E2A\u0E37\u0E49\u0E2D'))), this.state.step === 2 && _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Preorder'), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, '\u0E2D\u0E35\u0E40\u0E21\u0E25'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, '\u0E44\u0E0B\u0E2A\u0E4C\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'S (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'M (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'L (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'XL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'XXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'XXXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Back'), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Submit')), _react2.default.createElement('div', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '#LimitedEducation'))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;