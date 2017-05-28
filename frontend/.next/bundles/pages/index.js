
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _backgroundVideo = __webpack_require__(589);

var _backgroundVideo2 = _interopRequireDefault(_backgroundVideo);

var _transformName = __webpack_require__(592);

var _transformName2 = _interopRequireDefault(_transformName);

var _generateImage = __webpack_require__(590);

var _generateImage2 = _interopRequireDefault(_generateImage);

var _shareImage = __webpack_require__(591);

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = __webpack_require__(593);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactHelmet = __webpack_require__(525);

var _reactShare = __webpack_require__(623);

var _lodash = __webpack_require__(428);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactFacebook = __webpack_require__(662);

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js?entry';


var sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';
var siteUrl = 'https://limited-education.now.sh';

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

      this.setState({ step: 1 });
      if (this.state.inputName.length > 0) {
        (0, _generateImage2.default)(this.state.outputName, function (imgUrl) {
          var imageBase64String = imgUrl.split(',').pop();
          (0, _shareImage2.default)(imageBase64String, function (err, sharedId) {
            console.log(sharedId);
            if (err) {
              // Handle error
              alert('Failed to upload share image');
            } else {
              _this2.setState({
                step: 2,
                outputImageUrl: imgUrl,
                sharedLink: siteUrl + '/?shareid=' + sharedId,
                sharedImageUrl: '' + sharedImageBaseUrl + sharedId + '.jpg'
              });
            }
          });
        });
      }
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

    // Deprecated

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
          alert('Failed to upload share image');
        } else {
          alert('uploaded');
          _this3.setState({
            sharedLink: siteUrl + '/?shareid=' + sharedId,
            sharedImageUrl: '' + sharedImageBaseUrl + sharedId + '.jpg'
          });
          // FB.ui({
          //   redirect_uri: `${siteUrl}/thankyou`,
          //   hashtag: '',
          //   method: 'share',
          //   display: 'popup',
          //   href: 'https://developers.facebook.com/docs/',
          // }, function(response){});
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var shareId = _lodash2.default.get(this.props, 'url.query.shareid');
      var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Limited Education'), _react2.default.createElement('meta', { name: 'description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:url', content: 'siteUrl?shareid=' + shareId, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }) : _react2.default.createElement('meta', { property: 'og:url', content: siteUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), _react2.default.createElement('meta', { property: 'og:title', content: '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement('meta', { property: 'og:description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:image', content: '' + sharedImageBaseUrl + shareId + '.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }) : _react2.default.createElement('meta', { property: 'og:image', content: 'https://s3.amazonaws.com/photocampaign-storage/limited_website_share.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react2.default.createElement(_backgroundVideo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement('div', { className: 'page-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('h1', { className: 'page-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, '\u0E25\u0E34\u0E21\u0E34\u0E40\u0E15\u0E47\u0E14 \u0E40\u0E2D\u0E47\u0E14\u0E14\u0E39\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19'), _react2.default.createElement('div', { className: 'sub-header-svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_reactInlinesvg2.default, { src: '/static/images/limited-education-text-eng.svg', style: { height: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), this.state.step === 0 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', { className: 'input-name-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onTextNameChage.bind(this), placeholder: '\u0E42\u0E1B\u0E23\u0E14\u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07...', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })), _react2.default.createElement('button', { className: 'btn btn-blue-2', onClick: this.onGenerateClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, '\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, '\u0E04\u0E38\u0E13\u0E23\u0E39\u0E49\u0E23\u0E36\u0E40\u0E1B\u0E25\u0E48\u0E32\u0E27\u0E48\u0E32...\u0E21\u0E35\u0E40\u0E14\u0E47\u0E01\u0E44\u0E17\u0E22\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), '140,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E2D\u0E2D\u0E01', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), '\u0E41\u0E25\u0E30 270,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?'))), this.state.step === 1 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, 'LOADING...')), this.state.step === 2 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('img', { src: this.state.outputImageUrl, className: 'preview-generated-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, '\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E25\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E47\u0E01\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E43\u0E19\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E44\u0E1B\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E01\u0E34\u0E42\u0E25'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, '\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('button', { className: 'btn btn-default', onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, '\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A'), _react2.default.createElement('a', { className: 'btn btn-blue-1', href: this.state.outputImageUrl, download: 'output.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, '\u0E42\u0E2B\u0E25\u0E14'), _react2.default.createElement(_reactFacebook2.default, { appId: '649567235238332', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_reactFacebook.Share, { href: this.state.sharedLink, hashtag: 'LimitedEducation', redirectURI: siteUrl + '/thankyou', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement('button', { className: 'btn btn-blue-2', type: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, '\u0E41\u0E0A\u0E23\u0E4C'))), _react2.default.createElement('a', { className: 'btn btn-blue-3', href: 'https://taejai.com/th/', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, '\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E2A\u0E37\u0E49\u0E2D'))), this.state.step === 3 && _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, 'Preorder'), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, '\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, '\u0E2D\u0E35\u0E40\u0E21\u0E25'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, '\u0E44\u0E0B\u0E2A\u0E4C\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, 'S (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, 'M (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'L (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, 'XL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, 'XXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, 'XXXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      })), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, 'Back'), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, 'Submit')), _react2.default.createElement('div', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(7);

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
        left: 0,
        top: 0,
        // minWidth: '100%',
        // minHeight: '100%';
        width: '100%',
        height: 'auto'
      };

      var overlayStyle = {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        height: '150%',
        position: 'fixed',
        left: 0,
        top: 0
      };

      return _react2.default.createElement('div', { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('video', { width: '100%', height: 'auto', autoPlay: true, style: videoStyle, loop: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('source', { src: '/static/videos/mother.mp4', type: 'video/mp4', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('div', { style: overlayStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateImage = function generateImage(name, cb) {
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
exports.default = generateImage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/generate-image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/generate-image.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "https://jcf1vfterh.execute-api.us-east-1.amazonaws.com/dev";
var shareImage = function shareImage(imageBase64String, cb) {
  var request = __webpack_require__(595);
  request.post(API_URL + '/share-image').send({ image: imageBase64String }).end(function (err, res) {
    console.log('shareImage Response');
    console.log(res);
    cb(err, _.get(res, 'body.id'));
  });
};

exports.default = shareImage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); } } })();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(428);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/transform-name.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/transform-name.js"); } } })();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(580);


/***/ })

},[603]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzBlYTU4ZDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvLmpzPzBlYTU4ZDkiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2VuZXJhdGUtaW1hZ2UuanM/MGVhNThkOSIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZS5qcz8wZWE1OGQ5Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lLmpzPzBlYTU4ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tncm91bmQtdmlkZW8nXG5pbXBvcnQgdHJhc2Zvcm1OYW1lIGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lJ1xuaW1wb3J0IGdlbmVyYXRlSW1hZ2UgZnJvbSAnLi4vc2VydmljZXMvZ2VuZXJhdGUtaW1hZ2UnXG5pbXBvcnQgc2hhcmVJbWFnZSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZSdcbmltcG9ydCBJc3ZnIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbnMgfSBmcm9tICdyZWFjdC1zaGFyZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEZhY2Vib29rUHJvdmlkZXIsIHsgU2hhcmUgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5cblxuXG5jb25zdCBzaGFyZWRJbWFnZUJhc2VVcmwgPSAnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3Bob3RvY2FtcGFpZ24tc3RvcmFnZS8nO1xuY29uc3Qgc2l0ZVVybCA9ICdodHRwczovL2xpbWl0ZWQtZWR1Y2F0aW9uLm5vdy5zaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHN0ZXA6IDAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICByZXR1cm4gcmVxXG4gICAgICA/IHsgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIH1cbiAgICAgIDogeyB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfVxuICB9XG5cbiAgb25HZW5lcmF0ZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGVwOiAxIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUuaW5wdXROYW1lLmxlbmd0aCA+IDApe1xuICAgICAgZ2VuZXJhdGVJbWFnZSh0aGlzLnN0YXRlLm91dHB1dE5hbWUsIChpbWdVcmwpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VCYXNlNjRTdHJpbmcgPSBpbWdVcmwuc3BsaXQoJywnKS5wb3AoKTtcbiAgICAgICAgc2hhcmVJbWFnZShpbWFnZUJhc2U2NFN0cmluZywgKGVyciwgc2hhcmVkSWQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzaGFyZWRJZCk7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwbG9hZCBzaGFyZSBpbWFnZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgICAgICAgIHN0ZXA6IDIsXG4gICAgICAgICAgICAgIG91dHB1dEltYWdlVXJsOiBpbWdVcmwsXG4gICAgICAgICAgICAgIHNoYXJlZExpbms6IGAke3NpdGVVcmx9Lz9zaGFyZWlkPSR7c2hhcmVkSWR9YCxcbiAgICAgICAgICAgICAgc2hhcmVkSW1hZ2VVcmw6IGAke3NoYXJlZEltYWdlQmFzZVVybH0ke3NoYXJlZElkfS5qcGdgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIG9uVGV4dE5hbWVDaGFnZShlKSB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0TmFtZTogdmFsLCBvdXRwdXROYW1lOiB0cmFzZm9ybU5hbWUodmFsKSB9KTtcbiAgfVxuXG4gIG9uQmFja0NsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGVwOiAwLCBpbnB1dE5hbWU6ICcnLCBvdXRwdXROYW1lOiAnJyB9KTtcbiAgfVxuXG4gIC8vIERlcHJlY2F0ZWRcbiAgb25TaGFyZUNsaWNrKCkge1xuICAgIC8vIFRPRE8gVXBsb2FkIGltYWdlIHRvIHRoZSBzZXJ2aWNlIGFuZCBnZXQgdGhlIGlkIHJlc3BvbnNlXG4gICAgLy8gU2V0IHRoZSBzaGFyZSBsaW5rXG4gICAgLy8gT3BlbiBGQiBEaWFsb2dcbiAgICBjb25zdCBpbWFnZUJhc2U2NFN0cmluZyA9IHRoaXMuc3RhdGUub3V0cHV0SW1hZ2VVcmwuc3BsaXQoJywnKS5wb3AoKTtcbiAgICBzaGFyZUltYWdlKGltYWdlQmFzZTY0U3RyaW5nLCAoZXJyLCBzaGFyZWRJZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2hhcmVkSWQpO1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGxvYWQgc2hhcmUgaW1hZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCd1cGxvYWRlZCcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgICAgc2hhcmVkTGluazogYCR7c2l0ZVVybH0vP3NoYXJlaWQ9JHtzaGFyZWRJZH1gLFxuICAgICAgICAgIHNoYXJlZEltYWdlVXJsOiBgJHtzaGFyZWRJbWFnZUJhc2VVcmx9JHtzaGFyZWRJZH0uanBnYCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZCLnVpKHtcbiAgICAgICAgLy8gICByZWRpcmVjdF91cmk6IGAke3NpdGVVcmx9L3RoYW5reW91YCxcbiAgICAgICAgLy8gICBoYXNodGFnOiAnJyxcbiAgICAgICAgLy8gICBtZXRob2Q6ICdzaGFyZScsXG4gICAgICAgIC8vICAgZGlzcGxheTogJ3BvcHVwJyxcbiAgICAgICAgLy8gICBocmVmOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzLycsXG4gICAgICAgIC8vIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKXt9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzaGFyZUlkID0gXy5nZXQodGhpcy5wcm9wcywgJ3VybC5xdWVyeS5zaGFyZWlkJyk7XG4gICAgY29uc3QgeyBGYWNlYm9va1NoYXJlQnV0dG9uIH0gPSBTaGFyZUJ1dHRvbnM7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5MaW1pdGVkIEVkdWNhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLguITguLjguJPguIHguYfguKrguLLguKHguLLguKPguJbguKPguYjguKfguKHguYDguJvguYfguJnguK3guLXguIHguKvguJnguLbguYjguIfguJ7guKXguLHguIfguYPguJnguIHguLLguKPguKrguKPguYnguLLguIfguYLguK3guIHguLLguKrguJfguLLguIfguIHguLLguKPguKjguLbguIHguKnguLLguYPguKvguYnguIHguLHguJrguJnguYnguK3guIfguYbguYTguJTguYnguIfguYjguLLguKLguYbguYDguJ7guLXguKLguIfguYHguITguYjguITguKXguLTguIFcIiAvPlxuICAgICAgICB7c2hhcmVJZCA/XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgc2l0ZVVybD9zaGFyZWlkPSR7c2hhcmVJZH1gfSAvPiA6XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtzaXRlVXJsfSAvPlxuICAgICAgICB9XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCLguITguLjguJPguITguLTguJTguKfguYjguLLguYDguJTguYfguIHguITguJnguJnguLHguYnguJnguIjguLDguYDguILguLXguKLguJnguIrguLfguYjguK3guITguLjguJPguK3guK3guIHguKHguLLguYDguJvguYfguJnguK3guKLguYjguLLguIfguYTguKM/XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLguITguLjguJPguIHguYfguKrguLLguKHguLLguKPguJbguKPguYjguKfguKHguYDguJvguYfguJnguK3guLXguIHguKvguJnguLbguYjguIfguJ7guKXguLHguIfguYPguJnguIHguLLguKPguKrguKPguYnguLLguIfguYLguK3guIHguLLguKrguJfguLLguIfguIHguLLguKPguKjguLbguIHguKnguLLguYPguKvguYnguIHguLHguJrguJnguYnguK3guIfguYbguYTguJTguYnguIfguYjguLLguKLguYbguYDguJ7guLXguKLguIfguYHguITguYjguITguKXguLTguIFcIiAvPlxuICAgICAgICB7c2hhcmVJZCA/XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake3NoYXJlZEltYWdlQmFzZVVybH0ke3NoYXJlSWR9LmpwZ2B9IC8+IDpcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9waG90b2NhbXBhaWduLXN0b3JhZ2UvbGltaXRlZF93ZWJzaXRlX3NoYXJlLmpwZ1wiIC8+XG4gICAgICAgIH1cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPEJhY2tncm91bmRWaWRlbyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj7guKXguLTguKHguLTguYDguJXguYfguJQg4LmA4Lit4LmH4LiU4LiU4Li54LmA4LiE4LiK4Lix4LmI4LiZPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyLXN2Z1wiPlxuICAgICAgICAgIDxJc3ZnIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xpbWl0ZWQtZWR1Y2F0aW9uLXRleHQtZW5nLnN2Z1wiIHN0eWxlPXt7IGhlaWdodDogJzQwcHgnIH19PjwvSXN2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsodGhpcy5zdGF0ZS5zdGVwID09PSAwKSAmJiBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1uYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblRleHROYW1lQ2hhZ2UuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCLguYLguJvguKPguJTguYPguKrguYjguIrguLfguYjguK3guILguK3guIfguITguLjguJPguYPguJnguIrguYjguK3guIcuLi5cIi8+PGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlLTJcIiBvbkNsaWNrPXt0aGlzLm9uR2VuZXJhdGVDbGljay5iaW5kKHRoaXMpfT7guYHguKrguJTguIfguJzguKU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICDguITguLjguJPguKPguLnguYnguKPguLbguYDguJvguKXguYjguLLguKfguYjguLIuLi7guKHguLXguYDguJTguYfguIHguYTguJfguKLguKHguLLguIHguIHguKfguYjguLI8YnIvPlxuICAgICAgICAgICAgICAxNDAsMDAwIOC4hOC4meC4l+C4teC5iOC4reC5iOC4suC4meC4q+C4meC4seC4h+C4quC4t+C4reC5hOC4oeC5iOC4reC4reC4gTxici8+XG4gICAgICAgICAgICAgIOC5geC4peC4sCAyNzAsMDAwIOC4hOC4meC4l+C4teC5iOC5gOC4guC4teC4ouC4meC4q+C4meC4seC4h+C4quC4t+C4reC5hOC4oeC5iOC5hOC4lOC5iTxici8+XG4gICAgICAgICAgICAgIOC4hOC4uOC4k+C4hOC4tOC4lOC4p+C5iOC4suC5gOC4lOC5h+C4geC4hOC4meC4meC4seC5ieC4meC4iOC4sOC5gOC4guC4teC4ouC4meC4iuC4t+C5iOC4reC4hOC4uOC4k+C4reC4reC4geC4oeC4suC5gOC4m+C5h+C4meC4reC4ouC5iOC4suC4h+C5hOC4oz9cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyh0aGlzLnN0YXRlLnN0ZXAgPT09IDEpICYmIFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5MT0FESU5HLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsodGhpcy5zdGF0ZS5zdGVwID09PSAyKSAmJiBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUub3V0cHV0SW1hZ2VVcmx9IGNsYXNzTmFtZT1cInByZXZpZXctZ2VuZXJhdGVkLWltYWdlXCIvPjxiciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+4LiZ4Li14LmI4LiE4Li34Lit4Lil4Liy4Lii4Lih4Li34Lit4LiI4Lij4Li04LiH4LiC4Lit4LiH4LmA4LiU4LmH4LiB4LiZ4Lix4LiB4LmA4Lij4Li14Lii4LiZIOC5g+C4meC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC5geC4q+C5iOC4h+C4q+C4meC4tuC5iOC4h+C4l+C4teC5iOC4q+C5iOC4suC4h+C4iOC4suC4geC4geC4o+C4uOC4h+C5gOC4l+C4nuC5hOC4m+C5hOC4oeC5iOC4geC4teC5iOC4geC4tOC5guC4pTwvcD5cbiAgICAgICAgICAgICAgPHA+4LiE4Li44LiT4Liq4Liy4Lih4Liy4Lij4LiW4Lij4LmI4Lin4Lih4LmA4Lib4LmH4LiZ4Lit4Li14LiB4Lir4LiZ4Li24LmI4LiH4Lie4Lil4Lix4LiH4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4LmC4Lit4LiB4Liy4Liq4LiX4Liy4LiH4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4LmD4Lir4LmJ4LiB4Lix4Lia4LiZ4LmJ4Lit4LiH4LmG4LmE4LiU4LmJ4LiH4LmI4Liy4Lii4LmG4LmA4Lie4Li14Lii4LiH4LmB4LiE4LmIPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKX0+4Lii4LmJ4Lit4LiZ4LiB4Lil4Lix4LiaPC9idXR0b24+IFxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUtMVwiIGhyZWY9e3RoaXMuc3RhdGUub3V0cHV0SW1hZ2VVcmx9IGRvd25sb2FkPVwib3V0cHV0LmpwZ1wiPuC5guC4q+C4peC4lDwvYT4gXG4gICAgICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiNjQ5NTY3MjM1MjM4MzMyXCI+XG4gICAgICAgICAgICAgICAgPFNoYXJlIGhyZWY9e3RoaXMuc3RhdGUuc2hhcmVkTGlua30gaGFzaHRhZz1cIkxpbWl0ZWRFZHVjYXRpb25cIiByZWRpcmVjdFVSST17YCR7c2l0ZVVybH0vdGhhbmt5b3VgfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlLTJcIiB0eXBlPVwiYnV0dG9uXCI+4LmB4LiK4Lij4LmMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9TaGFyZT5cbiAgICAgICAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUtM1wiIGhyZWY9XCJodHRwczovL3RhZWphaS5jb20vdGgvXCI+4Liq4Lix4LmI4LiH4LiL4Li34LmJ4Lit4LmA4Liq4Li34LmJ4LitPC9hPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWRMaW5rfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlZExpbmt9IHBpY3R1cmU9e3RoaXMuc3RhdGUuc2hhcmVkSW1hZ2VVcmx9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZmJTaGFyZUJ0blJlZiA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICBmYnNoYXJldGVzdFxuICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMykgJiYgXG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aDI+UHJlb3JkZXI8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guIrguLfguYjguK3guILguK3guIfguITguLjguJM8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4qOC4seC4nuC4l+C5jDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+4Lit4Li14LmA4Lih4LilPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guYTguIvguKrguYzguYDguKrguLfguYnguK3guJfguLXguYjguJXguYnguK3guIfguIHguLLguKM8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+UyAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5NICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPkwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+WEwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+WFhMICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPlhYWEwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKX0+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxzcGFuPiNMaW1pdGVkRWR1Y2F0aW9uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGxlZnQ6MCxcbiAgICAgIHRvcDowLFxuICAgICAgLy8gbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIG1pbkhlaWdodDogJzEwMCUnO1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIH1cblxuICAgIGNvbnN0IG92ZXJsYXlTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTUwJScsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgIDx2aWRlbyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgYXV0b1BsYXkgc3R5bGU9e3ZpZGVvU3R5bGV9IGxvb3A+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3N0YXRpYy92aWRlb3MvbW90aGVyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgPC92aWRlbz5cbiAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXlTdHlsZX0+PC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvLmpzIiwiY29uc3QgZ2VuZXJhdGVJbWFnZSA9IChuYW1lLCBjYikgPT4ge1xuICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xuICBiZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHcgPSAxMjAwO1xuICAgIGNvbnN0IGggPSA2MzA7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmcsIDAsIDAsIHcsIGgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjb25zdCBmb250U2l6ZSA9IDEwMDtcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IGxpbWl0ZWRfZWR1Y2F0aW9uYDtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC50ZXh0QWxpZ249XCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFRleHQobmFtZSwgdyAvIDIsIChoIC8gMikpO1xuICAgIGNiKGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAxLjApKTtcbiAgfTtcbiAgYmcuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL21vY2stdHNoaXJ0LmpwZyc7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVJbWFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9nZW5lcmF0ZS1pbWFnZS5qcyIsImNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vamNmMXZmdGVyaC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIlxuY29uc3Qgc2hhcmVJbWFnZSA9IChpbWFnZUJhc2U2NFN0cmluZywgY2IpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbiAgICByZXF1ZXN0XG4gICAgICAucG9zdChBUElfVVJMICsgJy9zaGFyZS1pbWFnZScpXG4gICAgICAuc2VuZCh7IGltYWdlOiBpbWFnZUJhc2U2NFN0cmluZyB9KVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlSW1hZ2UgUmVzcG9uc2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY2IoZXJyLCBfLmdldChyZXMsICdib2R5LmlkJykpO1xuICAgICAgfSk7IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVJbWFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZS5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgdHJhbnNmb3JtYXRpb25zID0gW1xuICB7IGZyb206ICfguIonLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ii9pLCAn4LiCJykpIH0sXG4gIHsgZnJvbTogJ+C4gicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiCL2ksICfguIonKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4pycpKSB9LFxuICB7IGZyb206ICfguKcnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4py9pLCAn4LiyJykpIH0sXG4gIHsgZnJvbTogJ+C4sScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LixL2ksICfguLQnKSkgfSxcbiAgeyBmcm9tOiAn4Li0JywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLQvaSwgJ+C4sScpKSB9LFxuICB7IGZyb206ICfguLUnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4tS9pLCAn4Li0JykpIH0sXG4gIHsgZnJvbTogJ+C4tCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4Li0L2ksICfguLUnKSkgfSxcbiAgeyBmcm9tOiAn4LieJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJ4vaSwgJ+C4nCcpKSB9LFxuICB7IGZyb206ICfguJwnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4nC9pLCAn4LieJykpIH0sXG4gIHsgZnJvbTogJ+C4sicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiyL2ksICfguLLguLInKSkgfSxcbiAgeyBmcm9tOiAn4LiCJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIIvaSwgJ+C4mycpKSB9LFxuICB7IGZyb206ICfguIInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gi9pLCAn4LiaJykpIH0sXG4gIHsgZnJvbTogJ+C4micsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiaL2ksICfguIInKSkgfSxcbiAgeyBmcm9tOiAn4LibJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJsvaSwgJ+C4gicpKSB9LFxuICB7IGZyb206ICfguJonLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4mi9pLCAn4LibJykpIH0sXG4gIHsgZnJvbTogJ+C4mycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LibL2ksICfguJonKSkgfSxcbiAgeyBmcm9tOiAn4LiUJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJQvaSwgJ+C4hCcpKSB9LFxuICB7IGZyb206ICfguIQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4hC9pLCAn4LiUJykpIH0sXG4gIHsgZnJvbTogJ+C4qicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiqL2ksICfguKUnKSkgfSxcbiAgeyBmcm9tOiAn4LilJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKUvaSwgJ+C4qicpKSB9LFxuICB7IGZyb206ICfguYEnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C5gS9pLCAn4LmAJykpIH0sXG4gIHsgZnJvbTogJ+C5gCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LmAL2ksICfguYEnKSkgfSxcbiAgeyBmcm9tOiAn4LiXJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJcvaSwgJ+C4qycpKSB9LFxuICB7IGZyb206ICfguKsnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4qy9pLCAn4LiXJykpIH0sXG4gIHsgZnJvbTogJ+C4gScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiBL2ksICfguLInKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4gScpKSB9LFxuICB7IGZyb206ICfguK0nLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4rS9pLCAn4LinJykpIH0sXG4gIHsgZnJvbTogJ+C4pycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LinL2ksICfguK0nKSkgfSxcbiAgeyBmcm9tOiAn4LiBJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIEvaSwgJ+C4lycpKSB9LFxuXTtcblxuY29uc3QgdHJhbnNmb3JtTmFtZSA9IChuYW1lKSA9PiB7XG4gIGxldCBvdXROYW1lID0gbmFtZTtcbiAgY29uc3QgbnVtRXJyb3JzID0gTWF0aC5jZWlsKG5hbWUubGVuZ3RoIC8gNSk7XG4gIGNvbnN0IHBvdGVudGlhbFRyYW5zZm9ybWF0aW9ucyA9ICBfLnNodWZmbGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0KSA9PiAobmFtZS5pbmRleE9mKHQuZnJvbSkgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICBjb25zb2xlLmxvZyhwb3RlbnRpYWxUcmFuc2Zvcm1hdGlvbnMpO1xuICBfLmZvckVhY2gocG90ZW50aWFsVHJhbnNmb3JtYXRpb25zLCAodCwgaSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHQpO1xuICAgIGlmIChpIDwgbnVtRXJyb3JzKSB7XG4gICAgICBvdXROYW1lID0gdC5mbihvdXROYW1lKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0TmFtZTtcbn07XG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1OYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFZQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUEzS0E7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUkE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBOzs7Ozs7QUEvQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        