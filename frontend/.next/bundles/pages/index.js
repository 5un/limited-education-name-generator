
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 605:
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

var _backgroundVideo = __webpack_require__(631);

var _backgroundVideo2 = _interopRequireDefault(_backgroundVideo);

var _sponsorBar = __webpack_require__(665);

var _sponsorBar2 = _interopRequireDefault(_sponsorBar);

var _transformName = __webpack_require__(634);

var _transformName2 = _interopRequireDefault(_transformName);

var _generateImage = __webpack_require__(632);

var _generateImage2 = _interopRequireDefault(_generateImage);

var _shareImage = __webpack_require__(633);

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = __webpack_require__(635);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactHelmet = __webpack_require__(525);

var _reactShare = __webpack_require__(639);

var _lodash = __webpack_require__(428);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactFacebook = __webpack_require__(630);

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
          lineNumber: 97
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Limited Education'), _react2.default.createElement('meta', { name: 'description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:url', content: 'siteUrl?shareid=' + shareId, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }) : _react2.default.createElement('meta', { property: 'og:url', content: siteUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement('meta', { property: 'og:title', content: '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement('meta', { property: 'og:description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:image', content: '' + sharedImageBaseUrl + shareId + '.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }) : _react2.default.createElement('meta', { property: 'og:image', content: 'https://s3.amazonaws.com/photocampaign-storage/limited_website_share.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement(_backgroundVideo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement('div', { className: 'page-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('h1', { className: 'page-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, '\u0E25\u0E34\u0E21\u0E34\u0E40\u0E15\u0E47\u0E14 \u0E40\u0E2D\u0E47\u0E14\u0E14\u0E39\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19'), _react2.default.createElement('div', { className: 'sub-header-svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_reactInlinesvg2.default, { src: '/static/images/limited-education-text-eng.svg', style: { height: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })), this.state.step === 0 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { className: 'input-name-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onTextNameChage.bind(this), placeholder: '\u0E42\u0E1B\u0E23\u0E14\u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07...', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), _react2.default.createElement('button', { className: 'btn btn-blue-2', onClick: this.onGenerateClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, '\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u0E04\u0E38\u0E13\u0E23\u0E39\u0E49\u0E23\u0E36\u0E40\u0E1B\u0E25\u0E48\u0E32\u0E27\u0E48\u0E32...\u0E21\u0E35\u0E40\u0E14\u0E47\u0E01\u0E44\u0E17\u0E22\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), '140,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E2D\u0E2D\u0E01', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), '\u0E41\u0E25\u0E30 270,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?')), _react2.default.createElement('footer', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, '#LimitedEducation'))), this.state.step === 1 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, 'LOADING...')), this.state.step === 2 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement('img', { src: this.state.outputImageUrl, className: 'preview-generated-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, '\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E25\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E47\u0E01\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E43\u0E19\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E44\u0E1B\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E01\u0E34\u0E42\u0E25'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, '\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement('button', { className: 'btn btn-default', onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, '\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A'), _react2.default.createElement('a', { className: 'btn btn-blue-1', href: this.state.outputImageUrl, download: 'output.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, '\u0E42\u0E2B\u0E25\u0E14'), _react2.default.createElement(_reactFacebook2.default, { appId: '649567235238332', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(_reactFacebook.Share, { href: this.state.sharedLink, hashtag: 'LimitedEducation', redirectURI: siteUrl + '/thankyou', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement('button', { className: 'btn btn-blue-2', type: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, '\u0E41\u0E0A\u0E23\u0E4C'))), _react2.default.createElement('a', { className: 'btn btn-blue-3', href: 'https://taejai.com/th/', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, '\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E2A\u0E37\u0E49\u0E2D')), _react2.default.createElement('footer', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_sponsorBar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }))), this.state.step === 3 && _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, 'Preorder'), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, '\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, '\u0E2D\u0E35\u0E40\u0E21\u0E25'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, '\u0E44\u0E0B\u0E2A\u0E4C\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, 'S (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, 'M (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, 'L (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, 'XL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, 'XXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, 'XXXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, 'Back'), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, 'Submit'))));
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

/***/ 631:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); } } })();

/***/ }),

/***/ 632:
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

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "https://jcf1vfterh.execute-api.us-east-1.amazonaws.com/dev";
var shareImage = function shareImage(imageBase64String, cb) {
  var request = __webpack_require__(653);
  request.post(API_URL + '/share-image').send({ image: imageBase64String }).end(function (err, res) {
    console.log('shareImage Response');
    console.log(res);
    cb(err, _.get(res, 'body.id'));
  });
};

exports.default = shareImage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); } } })();

/***/ }),

/***/ 634:
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

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(605);


/***/ }),

/***/ 665:
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

var _lodash = __webpack_require__(428);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/sponsor-bar.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var sponsors = [{ name: 'yuwapat', height: '58px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'teach-for-thailand', height: '39px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'learn-education', height: '29px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'edwings', height: '34px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'a-chieve', height: '54px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'greyhound', height: '26px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'scb', height: '54px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'siam-commercial', height: '59px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'chujai', height: '73px', link: 'http://www.teachforthailand.org/TH/' }, { name: 'glow', height: '44px', link: 'http://www.teachforthailand.org/TH/' }];

      var containerStyle = {
        background: 'white',
        padding: '20px 10px'
      };

      var sponsorStyle = {
        display: 'inline-block',
        padding: '0 20px',
        verticalAlign: 'middle'
      };

      return _react2.default.createElement('div', { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _lodash2.default.map(sponsors, function (sponsor) {
        return _react2.default.createElement('div', { style: sponsorStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement('a', { href: sponsor.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement('img', { src: '/static/images/sponsor-' + sponsor.name + '.png', style: { width: 'auto', height: sponsor.height }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })));
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/sponsor-bar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/sponsor-bar.js"); } } })();

/***/ })

},[664]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNmM2RjOTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvLmpzPzNmM2RjOTAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2VuZXJhdGUtaW1hZ2UuanM/M2YzZGM5MCIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZS5qcz8zZjNkYzkwIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lLmpzPzNmM2RjOTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG9uc29yLWJhci5qcz8zZjNkYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYWNrZ3JvdW5kVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvJ1xuaW1wb3J0IFNwb25zb3JCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zcG9uc29yLWJhcidcbmltcG9ydCB0cmFzZm9ybU5hbWUgZnJvbSAnLi4vc2VydmljZXMvdHJhbnNmb3JtLW5hbWUnXG5pbXBvcnQgZ2VuZXJhdGVJbWFnZSBmcm9tICcuLi9zZXJ2aWNlcy9nZW5lcmF0ZS1pbWFnZSdcbmltcG9ydCBzaGFyZUltYWdlIGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlLWltYWdlJ1xuaW1wb3J0IElzdmcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbmltcG9ydCB7IFNoYXJlQnV0dG9ucyB9IGZyb20gJ3JlYWN0LXNoYXJlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciwgeyBTaGFyZSB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcblxuXG5cbmNvbnN0IHNoYXJlZEltYWdlQmFzZVVybCA9ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vcGhvdG9jYW1wYWlnbi1zdG9yYWdlLyc7XG5jb25zdCBzaXRlVXJsID0gJ2h0dHBzOi8vbGltaXRlZC1lZHVjYXRpb24ubm93LnNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3RlcDogMCB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9XG4gIH1cblxuICBvbkdlbmVyYXRlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IDEgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5pbnB1dE5hbWUubGVuZ3RoID4gMCl7XG4gICAgICBnZW5lcmF0ZUltYWdlKHRoaXMuc3RhdGUub3V0cHV0TmFtZSwgKGltZ1VybCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZUJhc2U2NFN0cmluZyA9IGltZ1VybC5zcGxpdCgnLCcpLnBvcCgpO1xuICAgICAgICBzaGFyZUltYWdlKGltYWdlQmFzZTY0U3RyaW5nLCAoZXJyLCBzaGFyZWRJZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNoYXJlZElkKTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBsb2FkIHNoYXJlIGltYWdlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgICAgICAgc3RlcDogMixcbiAgICAgICAgICAgICAgb3V0cHV0SW1hZ2VVcmw6IGltZ1VybCxcbiAgICAgICAgICAgICAgc2hhcmVkTGluazogYCR7c2l0ZVVybH0vP3NoYXJlaWQ9JHtzaGFyZWRJZH1gLFxuICAgICAgICAgICAgICBzaGFyZWRJbWFnZVVybDogYCR7c2hhcmVkSW1hZ2VCYXNlVXJsfSR7c2hhcmVkSWR9LmpwZ2AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgb25UZXh0TmFtZUNoYWdlKGUpIHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXROYW1lOiB2YWwsIG91dHB1dE5hbWU6IHRyYXNmb3JtTmFtZSh2YWwpIH0pO1xuICB9XG5cbiAgb25CYWNrQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IDAsIGlucHV0TmFtZTogJycsIG91dHB1dE5hbWU6ICcnIH0pO1xuICB9XG5cbiAgLy8gRGVwcmVjYXRlZFxuICBvblNoYXJlQ2xpY2soKSB7XG4gICAgLy8gVE9ETyBVcGxvYWQgaW1hZ2UgdG8gdGhlIHNlcnZpY2UgYW5kIGdldCB0aGUgaWQgcmVzcG9uc2VcbiAgICAvLyBTZXQgdGhlIHNoYXJlIGxpbmtcbiAgICAvLyBPcGVuIEZCIERpYWxvZ1xuICAgIGNvbnN0IGltYWdlQmFzZTY0U3RyaW5nID0gdGhpcy5zdGF0ZS5vdXRwdXRJbWFnZVVybC5zcGxpdCgnLCcpLnBvcCgpO1xuICAgIHNoYXJlSW1hZ2UoaW1hZ2VCYXNlNjRTdHJpbmcsIChlcnIsIHNoYXJlZElkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGFyZWRJZCk7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxuICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwbG9hZCBzaGFyZSBpbWFnZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ3VwbG9hZGVkJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgICBzaGFyZWRMaW5rOiBgJHtzaXRlVXJsfS8/c2hhcmVpZD0ke3NoYXJlZElkfWAsXG4gICAgICAgICAgc2hhcmVkSW1hZ2VVcmw6IGAke3NoYXJlZEltYWdlQmFzZVVybH0ke3NoYXJlZElkfS5qcGdgLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRkIudWkoe1xuICAgICAgICAvLyAgIHJlZGlyZWN0X3VyaTogYCR7c2l0ZVVybH0vdGhhbmt5b3VgLFxuICAgICAgICAvLyAgIGhhc2h0YWc6ICcnLFxuICAgICAgICAvLyAgIG1ldGhvZDogJ3NoYXJlJyxcbiAgICAgICAgLy8gICBkaXNwbGF5OiAncG9wdXAnLFxuICAgICAgICAvLyAgIGhyZWY6ICdodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvJyxcbiAgICAgICAgLy8gfSwgZnVuY3Rpb24ocmVzcG9uc2Upe30pO1xuICAgICAgfVxuICAgICAgXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHNoYXJlSWQgPSBfLmdldCh0aGlzLnByb3BzLCAndXJsLnF1ZXJ5LnNoYXJlaWQnKTtcbiAgICBjb25zdCB7IEZhY2Vib29rU2hhcmVCdXR0b24gfSA9IFNoYXJlQnV0dG9ucztcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkxpbWl0ZWQgRWR1Y2F0aW9uPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIuC4hOC4uOC4k+C4geC5h+C4quC4suC4oeC4suC4o+C4luC4o+C5iOC4p+C4oeC5gOC4m+C5h+C4meC4reC4teC4geC4q+C4meC4tuC5iOC4h+C4nuC4peC4seC4h+C5g+C4meC4geC4suC4o+C4quC4o+C5ieC4suC4h+C5guC4reC4geC4suC4quC4l+C4suC4h+C4geC4suC4o+C4qOC4tuC4geC4qeC4suC5g+C4q+C5ieC4geC4seC4muC4meC5ieC4reC4h+C5huC5hOC4lOC5ieC4h+C5iOC4suC4ouC5huC5gOC4nuC4teC4ouC4h+C5geC4hOC5iOC4hOC4peC4tOC4gVwiIC8+XG4gICAgICAgIHtzaGFyZUlkID9cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BzaXRlVXJsP3NoYXJlaWQ9JHtzaGFyZUlkfWB9IC8+IDpcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3NpdGVVcmx9IC8+XG4gICAgICAgIH1cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIuC4hOC4uOC4k+C4hOC4tOC4lOC4p+C5iOC4suC5gOC4lOC5h+C4geC4hOC4meC4meC4seC5ieC4meC4iOC4sOC5gOC4guC4teC4ouC4meC4iuC4t+C5iOC4reC4hOC4uOC4k+C4reC4reC4geC4oeC4suC5gOC4m+C5h+C4meC4reC4ouC5iOC4suC4h+C5hOC4oz9cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIuC4hOC4uOC4k+C4geC5h+C4quC4suC4oeC4suC4o+C4luC4o+C5iOC4p+C4oeC5gOC4m+C5h+C4meC4reC4teC4geC4q+C4meC4tuC5iOC4h+C4nuC4peC4seC4h+C5g+C4meC4geC4suC4o+C4quC4o+C5ieC4suC4h+C5guC4reC4geC4suC4quC4l+C4suC4h+C4geC4suC4o+C4qOC4tuC4geC4qeC4suC5g+C4q+C5ieC4geC4seC4muC4meC5ieC4reC4h+C5huC5hOC4lOC5ieC4h+C5iOC4suC4ouC5huC5gOC4nuC4teC4ouC4h+C5geC4hOC5iOC4hOC4peC4tOC4gVwiIC8+XG4gICAgICAgIHtzaGFyZUlkID9cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7c2hhcmVkSW1hZ2VCYXNlVXJsfSR7c2hhcmVJZH0uanBnYH0gLz4gOlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3Bob3RvY2FtcGFpZ24tc3RvcmFnZS9saW1pdGVkX3dlYnNpdGVfc2hhcmUuanBnXCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9IZWxtZXQ+XG4gICAgICA8QmFja2dyb3VuZFZpZGVvIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPuC4peC4tOC4oeC4tOC5gOC4leC5h+C4lCDguYDguK3guYfguJTguJTguLnguYDguITguIrguLHguYjguJk8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXItc3ZnXCI+XG4gICAgICAgICAgPElzdmcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbGltaXRlZC1lZHVjYXRpb24tdGV4dC1lbmcuc3ZnXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNDBweCcgfX0+PC9Jc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyh0aGlzLnN0YXRlLnN0ZXAgPT09IDApICYmIFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dE5hbWVDaGFnZS5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIuC5guC4m+C4o+C4lOC5g+C4quC5iOC4iuC4t+C5iOC4reC4guC4reC4h+C4hOC4uOC4k+C5g+C4meC4iuC5iOC4reC4hy4uLlwiLz48YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUtMlwiIG9uQ2xpY2s9e3RoaXMub25HZW5lcmF0ZUNsaWNrLmJpbmQodGhpcyl9PuC5geC4quC4lOC4h+C4nOC4pTwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIOC4hOC4uOC4k+C4o+C4ueC5ieC4o+C4tuC5gOC4m+C4peC5iOC4suC4p+C5iOC4si4uLuC4oeC4teC5gOC4lOC5h+C4geC5hOC4l+C4ouC4oeC4suC4geC4geC4p+C5iOC4sjxici8+XG4gICAgICAgICAgICAgIDE0MCwwMDAg4LiE4LiZ4LiX4Li14LmI4Lit4LmI4Liy4LiZ4Lir4LiZ4Lix4LiH4Liq4Li34Lit4LmE4Lih4LmI4Lit4Lit4LiBPGJyLz5cbiAgICAgICAgICAgICAg4LmB4Lil4LiwIDI3MCwwMDAg4LiE4LiZ4LiX4Li14LmI4LmA4LiC4Li14Lii4LiZ4Lir4LiZ4Lix4LiH4Liq4Li34Lit4LmE4Lih4LmI4LmE4LiU4LmJPGJyLz5cbiAgICAgICAgICAgICAg4LiE4Li44LiT4LiE4Li04LiU4Lin4LmI4Liy4LmA4LiU4LmH4LiB4LiE4LiZ4LiZ4Lix4LmJ4LiZ4LiI4Liw4LmA4LiC4Li14Lii4LiZ4LiK4Li34LmI4Lit4LiE4Li44LiT4Lit4Lit4LiB4Lih4Liy4LmA4Lib4LmH4LiZ4Lit4Lii4LmI4Liy4LiH4LmE4LijP1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPiNMaW1pdGVkRWR1Y2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyh0aGlzLnN0YXRlLnN0ZXAgPT09IDEpICYmIFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5MT0FESU5HLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsodGhpcy5zdGF0ZS5zdGVwID09PSAyKSAmJiBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUub3V0cHV0SW1hZ2VVcmx9IGNsYXNzTmFtZT1cInByZXZpZXctZ2VuZXJhdGVkLWltYWdlXCIvPjxiciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+4LiZ4Li14LmI4LiE4Li34Lit4Lil4Liy4Lii4Lih4Li34Lit4LiI4Lij4Li04LiH4LiC4Lit4LiH4LmA4LiU4LmH4LiB4LiZ4Lix4LiB4LmA4Lij4Li14Lii4LiZIOC5g+C4meC5guC4o+C4h+C5gOC4o+C4teC4ouC4meC5geC4q+C5iOC4h+C4q+C4meC4tuC5iOC4h+C4l+C4teC5iOC4q+C5iOC4suC4h+C4iOC4suC4geC4geC4o+C4uOC4h+C5gOC4l+C4nuC5hOC4m+C5hOC4oeC5iOC4geC4teC5iOC4geC4tOC5guC4pTwvcD5cbiAgICAgICAgICAgICAgPHA+4LiE4Li44LiT4Liq4Liy4Lih4Liy4Lij4LiW4Lij4LmI4Lin4Lih4LmA4Lib4LmH4LiZ4Lit4Li14LiB4Lir4LiZ4Li24LmI4LiH4Lie4Lil4Lix4LiH4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4LmC4Lit4LiB4Liy4Liq4LiX4Liy4LiH4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4LmD4Lir4LmJ4LiB4Lix4Lia4LiZ4LmJ4Lit4LiH4LmG4LmE4LiU4LmJ4LiH4LmI4Liy4Lii4LmG4LmA4Lie4Li14Lii4LiH4LmB4LiE4LmIPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKX0+4Lii4LmJ4Lit4LiZ4LiB4Lil4Lix4LiaPC9idXR0b24+IFxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUtMVwiIGhyZWY9e3RoaXMuc3RhdGUub3V0cHV0SW1hZ2VVcmx9IGRvd25sb2FkPVwib3V0cHV0LmpwZ1wiPuC5guC4q+C4peC4lDwvYT4gXG4gICAgICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiNjQ5NTY3MjM1MjM4MzMyXCI+XG4gICAgICAgICAgICAgICAgPFNoYXJlIGhyZWY9e3RoaXMuc3RhdGUuc2hhcmVkTGlua30gaGFzaHRhZz1cIkxpbWl0ZWRFZHVjYXRpb25cIiByZWRpcmVjdFVSST17YCR7c2l0ZVVybH0vdGhhbmt5b3VgfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlLTJcIiB0eXBlPVwiYnV0dG9uXCI+4LmB4LiK4Lij4LmMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9TaGFyZT5cbiAgICAgICAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUtM1wiIGhyZWY9XCJodHRwczovL3RhZWphaS5jb20vdGgvXCI+4Liq4Lix4LmI4LiH4LiL4Li34LmJ4Lit4LmA4Liq4Li34LmJ4LitPC9hPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPFNwb25zb3JCYXIgLz5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWRMaW5rfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gdXJsPXt0aGlzLnN0YXRlLnNoYXJlZExpbmt9IHBpY3R1cmU9e3RoaXMuc3RhdGUuc2hhcmVkSW1hZ2VVcmx9IHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZmJTaGFyZUJ0blJlZiA9IGlucHV0OyB9fT5cbiAgICAgICAgICAgICAgICBmYnNoYXJldGVzdFxuICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMykgJiYgXG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aDI+UHJlb3JkZXI8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guIrguLfguYjguK3guILguK3guIfguITguLjguJM8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuC5gOC4muC4reC4o+C5jOC5guC4l+C4o+C4qOC4seC4nuC4l+C5jDwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+4Lit4Li14LmA4Lih4LilPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guYTguIvguKrguYzguYDguKrguLfguYnguK3guJfguLXguYjguJXguYnguK3guIfguIHguLLguKM8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+UyAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5NICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPkwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+WEwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+WFhMICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPlhYWEwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKX0+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW9TdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOjAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIG1pbldpZHRoOiAnMTAwdncnLFxuICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuXG4gICAgfVxuXG4gICAgY29uc3Qgb3ZlcmxheVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjcpJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxNTAlJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgPHZpZGVvIGF1dG9QbGF5IHN0eWxlPXt2aWRlb1N0eWxlfSBsb29wPlxuICAgICAgICA8c291cmNlIHNyYz1cIi9zdGF0aWMvdmlkZW9zL3ZpZGVvLTE0OTYwNDc4MjYubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICA8L3ZpZGVvPlxuICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheVN0eWxlfT48L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2JhY2tncm91bmQtdmlkZW8uanMiLCJjb25zdCBnZW5lcmF0ZUltYWdlID0gKG5hbWUsIGNiKSA9PiB7XG4gIGNvbnN0IGJnID0gbmV3IEltYWdlKCk7XG4gIGJnLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgdyA9IDEyMDA7XG4gICAgY29uc3QgaCA9IDYzMDtcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmRyYXdJbWFnZShiZywgMCwgMCwgdywgaCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KDAsIDAsIHcsIGgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGNvbnN0IGZvbnRTaXplID0gMTAwO1xuICAgIGN0eC5mb250ID0gYCR7Zm9udFNpemV9cHggbGltaXRlZF9lZHVjYXRpb25gO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LnRleHRBbGlnbj1cImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChuYW1lLCB3IC8gMiwgKGggLyAyKSk7XG4gICAgY2IoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIDEuMCkpO1xuICB9O1xuICBiZy5zcmMgPSAnL3N0YXRpYy9pbWFnZXMvbW9jay10c2hpcnQuanBnJztcbn07XG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUltYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL2dlbmVyYXRlLWltYWdlLmpzIiwiY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9qY2YxdmZ0ZXJoLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2RldlwiXG5jb25zdCBzaGFyZUltYWdlID0gKGltYWdlQmFzZTY0U3RyaW5nLCBjYikgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xuICAgIHJlcXVlc3RcbiAgICAgIC5wb3N0KEFQSV9VUkwgKyAnL3NoYXJlLWltYWdlJylcbiAgICAgIC5zZW5kKHsgaW1hZ2U6IGltYWdlQmFzZTY0U3RyaW5nIH0pXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVJbWFnZSBSZXNwb25zZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjYihlcnIsIF8uZ2V0KHJlcywgJ2JvZHkuaWQnKSk7XG4gICAgICB9KTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGFyZUltYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL3NoYXJlLWltYWdlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCB0cmFuc2Zvcm1hdGlvbnMgPSBbXG4gIHsgZnJvbTogJ+C4iicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiKL2ksICfguIInKSkgfSxcbiAgeyBmcm9tOiAn4LiCJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIIvaSwgJ+C4iicpKSB9LFxuICB7IGZyb206ICfguLInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4si9pLCAn4LinJykpIH0sXG4gIHsgZnJvbTogJ+C4pycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LinL2ksICfguLInKSkgfSxcbiAgeyBmcm9tOiAn4LixJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLEvaSwgJ+C4tCcpKSB9LFxuICB7IGZyb206ICfguLQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4tC9pLCAn4LixJykpIH0sXG4gIHsgZnJvbTogJ+C4tScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4Li1L2ksICfguLQnKSkgfSxcbiAgeyBmcm9tOiAn4Li0JywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLQvaSwgJ+C4tScpKSB9LFxuICB7IGZyb206ICfguJ4nLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ni9pLCAn4LicJykpIH0sXG4gIHsgZnJvbTogJ+C4nCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LicL2ksICfguJ4nKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4suC4sicpKSB9LFxuICB7IGZyb206ICfguIInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gi9pLCAn4LibJykpIH0sXG4gIHsgZnJvbTogJ+C4gicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiCL2ksICfguJonKSkgfSxcbiAgeyBmcm9tOiAn4LiaJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJovaSwgJ+C4gicpKSB9LFxuICB7IGZyb206ICfguJsnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4my9pLCAn4LiCJykpIH0sXG4gIHsgZnJvbTogJ+C4micsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiaL2ksICfguJsnKSkgfSxcbiAgeyBmcm9tOiAn4LibJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJsvaSwgJ+C4micpKSB9LFxuICB7IGZyb206ICfguJQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4lC9pLCAn4LiEJykpIH0sXG4gIHsgZnJvbTogJ+C4hCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiEL2ksICfguJQnKSkgfSxcbiAgeyBmcm9tOiAn4LiqJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKovaSwgJ+C4pScpKSB9LFxuICB7IGZyb206ICfguKUnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4pS9pLCAn4LiqJykpIH0sXG4gIHsgZnJvbTogJ+C5gScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LmBL2ksICfguYAnKSkgfSxcbiAgeyBmcm9tOiAn4LmAJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guYAvaSwgJ+C5gScpKSB9LFxuICB7IGZyb206ICfguJcnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ly9pLCAn4LirJykpIH0sXG4gIHsgZnJvbTogJ+C4qycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LirL2ksICfguJcnKSkgfSxcbiAgeyBmcm9tOiAn4LiBJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIEvaSwgJ+C4sicpKSB9LFxuICB7IGZyb206ICfguLInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4si9pLCAn4LiBJykpIH0sXG4gIHsgZnJvbTogJ+C4rScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LitL2ksICfguKcnKSkgfSxcbiAgeyBmcm9tOiAn4LinJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKcvaSwgJ+C4rScpKSB9LFxuICB7IGZyb206ICfguIEnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gS9pLCAn4LiXJykpIH0sXG5dO1xuXG5jb25zdCB0cmFuc2Zvcm1OYW1lID0gKG5hbWUpID0+IHtcbiAgbGV0IG91dE5hbWUgPSBuYW1lO1xuICBjb25zdCBudW1FcnJvcnMgPSBNYXRoLmNlaWwobmFtZS5sZW5ndGggLyA1KTtcbiAgY29uc3QgcG90ZW50aWFsVHJhbnNmb3JtYXRpb25zID0gIF8uc2h1ZmZsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQpID0+IChuYW1lLmluZGV4T2YodC5mcm9tKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gIGNvbnNvbGUubG9nKHBvdGVudGlhbFRyYW5zZm9ybWF0aW9ucyk7XG4gIF8uZm9yRWFjaChwb3RlbnRpYWxUcmFuc2Zvcm1hdGlvbnMsICh0LCBpKSA9PiB7XG4gICAgY29uc29sZS5sb2codCk7XG4gICAgaWYgKGkgPCBudW1FcnJvcnMpIHtcbiAgICAgIG91dE5hbWUgPSB0LmZuKG91dE5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXROYW1lO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybU5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvdHJhbnNmb3JtLW5hbWUuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNwb25zb3JzID0gW1xuICAgICAgeyBuYW1lOiAneXV3YXBhdCcsIGhlaWdodDogJzU4cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICd0ZWFjaC1mb3ItdGhhaWxhbmQnLCBoZWlnaHQ6ICczOXB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnbGVhcm4tZWR1Y2F0aW9uJywgaGVpZ2h0OiAnMjlweCcsIGxpbms6ICdodHRwOi8vd3d3LnRlYWNoZm9ydGhhaWxhbmQub3JnL1RILycgfSxcbiAgICAgIHsgbmFtZTogJ2Vkd2luZ3MnLCBoZWlnaHQ6ICczNHB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnYS1jaGlldmUnLCBoZWlnaHQ6ICc1NHB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnZ3JleWhvdW5kJywgaGVpZ2h0OiAnMjZweCcsIGxpbms6ICdodHRwOi8vd3d3LnRlYWNoZm9ydGhhaWxhbmQub3JnL1RILycgfSxcbiAgICAgIHsgbmFtZTogJ3NjYicsIGhlaWdodDogJzU0cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICdzaWFtLWNvbW1lcmNpYWwnLCBoZWlnaHQ6ICc1OXB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnY2h1amFpJywgaGVpZ2h0OiAnNzNweCcsIGxpbms6ICdodHRwOi8vd3d3LnRlYWNoZm9ydGhhaWxhbmQub3JnL1RILycgfSxcbiAgICAgIHsgbmFtZTogJ2dsb3cnLCBoZWlnaHQ6ICc0NHB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgIF07XG5cbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICBwYWRkaW5nOiAnMjBweCAxMHB4JyxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BvbnNvclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwYWRkaW5nOiAnMCAyMHB4JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH07XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAge18ubWFwKHNwb25zb3JzLCAoc3BvbnNvcikgPT4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzcG9uc29yU3R5bGV9PlxuICAgICAgICAgIDxhIGhyZWY9e3Nwb25zb3IubGlua30+PGltZyBzcmM9e2Avc3RhdGljL2ltYWdlcy9zcG9uc29yLSR7c3BvbnNvci5uYW1lfS5wbmdgfSBzdHlsZT17eyB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6IHNwb25zb3IuaGVpZ2h0IH19IC8+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3BvbnNvci1iYXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQVlBO0FBWkE7QUFBQTs7QUFhQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7O0FBbExBOzs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBVEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUkE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBOzs7Ozs7QUE5QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBWUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7Ozs7O0FBakNBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        