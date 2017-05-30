
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

var _index = __webpack_require__(84);

var _index2 = _interopRequireDefault(_index);

var _backgroundVideo = __webpack_require__(631);

var _backgroundVideo2 = _interopRequireDefault(_backgroundVideo);

var _sponsorBar = __webpack_require__(632);

var _sponsorBar2 = _interopRequireDefault(_sponsorBar);

var _transformName = __webpack_require__(635);

var _transformName2 = _interopRequireDefault(_transformName);

var _generateImage = __webpack_require__(633);

var _generateImage2 = _interopRequireDefault(_generateImage);

var _shareImage = __webpack_require__(634);

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = __webpack_require__(636);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactHelmet = __webpack_require__(525);

var _reactFacebook = __webpack_require__(630);

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _reactResponsiveGrid = __webpack_require__(676);

var _lodash = __webpack_require__(428);

var _lodash2 = _interopRequireDefault(_lodash);

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
      _index2.default.push('/thankyou');
    }
  }, {
    key: 'renderBackButton',
    value: function renderBackButton() {
      return _react2.default.createElement('button', { className: 'btn btn-default full-width', onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, '\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A');
    }
  }, {
    key: 'renderDownloadButton',
    value: function renderDownloadButton() {
      return _react2.default.createElement('a', { className: 'btn btn-blue-1 full-width', href: this.state.outputImageUrl, download: 'output.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, '\u0E42\u0E2B\u0E25\u0E14');
    }
  }, {
    key: 'renderShareButton',
    value: function renderShareButton() {
      return _react2.default.createElement(_reactFacebook2.default, { appId: '649567235238332', redirectURI: siteUrl + '/thankyou', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_reactFacebook.Share, { href: this.state.sharedLink, hashtag: 'LimitedEducation', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('button', { className: 'btn btn-blue-2 full-width', type: 'button', onClick: this.onShareClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, '\u0E41\u0E0A\u0E23\u0E4C')));
    }
  }, {
    key: 'renderPreorderButton',
    value: function renderPreorderButton() {
      return _react2.default.createElement('a', { className: 'btn btn-blue-3 full-width', href: 'https://taejai.com/th/', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E40\u0E2A\u0E37\u0E49\u0E2D');
    }
  }, {
    key: 'render',
    value: function render() {
      var shareId = _lodash2.default.get(this.props, 'url.query.shareid');

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Limited Education'), _react2.default.createElement('meta', { name: 'description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:url', content: 'siteUrl?shareid=' + shareId, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }) : _react2.default.createElement('meta', { property: 'og:url', content: siteUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement('meta', { property: 'og:title', content: '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement('meta', { property: 'og:description', content: '\u0E04\u0E38\u0E13\u0E01\u0E47\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E04\u0E25\u0E34\u0E01', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), shareId ? _react2.default.createElement('meta', { property: 'og:image', content: '' + sharedImageBaseUrl + shareId + '.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }) : _react2.default.createElement('meta', { property: 'og:image', content: 'https://s3.amazonaws.com/photocampaign-storage/limited_website_share.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), _react2.default.createElement(_backgroundVideo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('div', { className: 'page-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('h1', { className: 'page-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, '\u0E25\u0E34\u0E21\u0E34\u0E40\u0E15\u0E47\u0E14 \u0E40\u0E2D\u0E47\u0E14\u0E14\u0E39\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19'), _react2.default.createElement('div', { className: 'sub-header-svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_reactInlinesvg2.default, { src: '/static/images/limited-education-text-eng.svg', style: { height: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), this.state.step === 0 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('div', { className: 'input-name-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.onTextNameChage.bind(this), placeholder: '\u0E42\u0E1B\u0E23\u0E14\u0E43\u0E2A\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07...', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { maxWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('button', { className: 'btn btn-blue-2 full-width', onClick: this.onGenerateClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, '\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25')), _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { minWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('button', { className: 'btn btn-blue-2', onClick: this.onGenerateClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, '\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, '\u0E04\u0E38\u0E13\u0E23\u0E39\u0E49\u0E23\u0E36\u0E40\u0E1B\u0E25\u0E48\u0E32\u0E27\u0E48\u0E32...\u0E21\u0E35\u0E40\u0E14\u0E47\u0E01\u0E44\u0E17\u0E22\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), '140,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E48\u0E32\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E2D\u0E2D\u0E01', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), '\u0E41\u0E25\u0E30 270,000 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), '\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E27\u0E48\u0E32\u0E40\u0E14\u0E47\u0E01\u0E04\u0E19\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23?')), _react2.default.createElement('footer', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, '#LimitedEducation'))), this.state.step === 1 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, 'LOADING...')), this.state.step === 2 && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement('img', { src: this.state.outputImageUrl, className: 'preview-generated-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, '\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E25\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E47\u0E01\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E43\u0E19\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E2B\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E44\u0E1B\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E01\u0E34\u0E42\u0E25'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, '\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E35\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E19\u0E49\u0E2D\u0E07\u0E46\u0E44\u0E14\u0E49\u0E07\u0E48\u0E32\u0E22\u0E46\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { maxWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, this.renderBackButton(), this.renderDownloadButton(), this.renderShareButton(), this.renderPreorderButton()), _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { minWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Container, {
        style: {
          maxWidth: 1170
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Grid, { columns: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Span, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, this.renderBackButton()), _react2.default.createElement(_reactResponsiveGrid.Span, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, this.renderDownloadButton()), _react2.default.createElement(_reactResponsiveGrid.Span, { columns: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, this.renderShareButton()), _react2.default.createElement(_reactResponsiveGrid.Span, { columns: 3, last: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, this.renderPreorderButton()))))), _react2.default.createElement('footer', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement(_sponsorBar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }))), this.state.step === 3 && _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, 'Preorder'), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, '\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, '\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, '\u0E2D\u0E35\u0E40\u0E21\u0E25'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      })), _react2.default.createElement('div', { className: 'form-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, '\u0E44\u0E0B\u0E2A\u0E4C\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, 'S (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, 'M (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, 'L (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, 'XL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, 'XXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), _react2.default.createElement('input', { type: 'radio', __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }), ' ', _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, 'XXXL (\u0E23\u0E2D\u0E1A\u0E2D\u0E01 0 \u0E19\u0E34\u0E49\u0E27 \u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27 0 \u0E19\u0E34\u0E49\u0E27)'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      })), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, 'Back'), _react2.default.createElement('button', { onClick: this.onBackClick.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 212
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

var _reactResponsiveGrid = __webpack_require__(676);

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

      var sponsorMobileStyle = {
        display: 'block',
        padding: '5px 20px'
      };

      return _react2.default.createElement('div', { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { maxWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _lodash2.default.map(sponsors, function (sponsor) {
        return _react2.default.createElement('div', { style: sponsorMobileStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement('a', { href: sponsor.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement('img', { src: '/static/images/sponsor-' + sponsor.name + '.png', style: { width: 'auto', height: sponsor.height }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })));
      })), _react2.default.createElement(_reactResponsiveGrid.Breakpoint, { minWidth: 700, widthMethod: 'componentWidth', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_reactResponsiveGrid.Container, {
        style: {
          maxWidth: 1170
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _lodash2.default.map(sponsors, function (sponsor) {
        return _react2.default.createElement('div', { style: sponsorStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement('a', { href: sponsor.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement('img', { src: '/static/images/sponsor-' + sponsor.name + '.png', style: { width: 'auto', height: sponsor.height }, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })));
      }))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/sponsor-bar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/sponsor-bar.js"); } } })();

/***/ }),

/***/ 633:
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

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "https://jcf1vfterh.execute-api.us-east-1.amazonaws.com/dev";
var shareImage = function shareImage(imageBase64String, cb) {
  var request = __webpack_require__(654);
  request.post(API_URL + '/share-image').send({ image: imageBase64String }).end(function (err, res) {
    console.log('shareImage Response');
    console.log(res);
    cb(err, _.get(res, 'body.id'));
  });
};

exports.default = shareImage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); } } })();

/***/ }),

/***/ 635:
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

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(605);


/***/ })

},[665]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzk0Nzk4ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvLmpzPzk0Nzk4ZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG9uc29yLWJhci5qcz85NDc5OGYzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2dlbmVyYXRlLWltYWdlLmpzPzk0Nzk4ZjMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2hhcmUtaW1hZ2UuanM/OTQ3OThmMyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy90cmFuc2Zvcm0tbmFtZS5qcz85NDc5OGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2dyb3VuZC12aWRlbydcbmltcG9ydCBTcG9uc29yQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc3BvbnNvci1iYXInXG5pbXBvcnQgdHJhc2Zvcm1OYW1lIGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lJ1xuaW1wb3J0IGdlbmVyYXRlSW1hZ2UgZnJvbSAnLi4vc2VydmljZXMvZ2VuZXJhdGUtaW1hZ2UnXG5pbXBvcnQgc2hhcmVJbWFnZSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZSdcbmltcG9ydCBJc3ZnIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciwgeyBTaGFyZSB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQnJlYWtwb2ludCwgU3BhbiB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtZ3JpZCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHNoYXJlZEltYWdlQmFzZVVybCA9ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vcGhvdG9jYW1wYWlnbi1zdG9yYWdlLyc7XG5jb25zdCBzaXRlVXJsID0gJ2h0dHBzOi8vbGltaXRlZC1lZHVjYXRpb24ubm93LnNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc3RlcDogMCB9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIHJldHVybiByZXFcbiAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9XG4gIH1cblxuICBvbkdlbmVyYXRlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IDEgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5pbnB1dE5hbWUubGVuZ3RoID4gMCl7XG4gICAgICBnZW5lcmF0ZUltYWdlKHRoaXMuc3RhdGUub3V0cHV0TmFtZSwgKGltZ1VybCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZUJhc2U2NFN0cmluZyA9IGltZ1VybC5zcGxpdCgnLCcpLnBvcCgpO1xuICAgICAgICBzaGFyZUltYWdlKGltYWdlQmFzZTY0U3RyaW5nLCAoZXJyLCBzaGFyZWRJZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNoYXJlZElkKTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBsb2FkIHNoYXJlIGltYWdlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgICAgICAgc3RlcDogMixcbiAgICAgICAgICAgICAgb3V0cHV0SW1hZ2VVcmw6IGltZ1VybCxcbiAgICAgICAgICAgICAgc2hhcmVkTGluazogYCR7c2l0ZVVybH0vP3NoYXJlaWQ9JHtzaGFyZWRJZH1gLFxuICAgICAgICAgICAgICBzaGFyZWRJbWFnZVVybDogYCR7c2hhcmVkSW1hZ2VCYXNlVXJsfSR7c2hhcmVkSWR9LmpwZ2AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgb25UZXh0TmFtZUNoYWdlKGUpIHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXROYW1lOiB2YWwsIG91dHB1dE5hbWU6IHRyYXNmb3JtTmFtZSh2YWwpIH0pO1xuICB9XG5cbiAgb25CYWNrQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IDAsIGlucHV0TmFtZTogJycsIG91dHB1dE5hbWU6ICcnIH0pO1xuICB9XG5cbiAgLy8gRGVwcmVjYXRlZFxuICBvblNoYXJlQ2xpY2soKSB7XG4gICAgUm91dGVyLnB1c2goJy90aGFua3lvdScpO1xuICB9XG5cbiAgcmVuZGVyQmFja0J1dHRvbigpIHtcbiAgICByZXR1cm4gKDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGZ1bGwtd2lkdGhcIiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PuC4ouC5ieC4reC4meC4geC4peC4seC4mjwvYnV0dG9uPik7XG4gIH1cblxuICByZW5kZXJEb3dubG9hZEJ1dHRvbigpIHtcbiAgICByZXR1cm4gKDxhIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZS0xIGZ1bGwtd2lkdGhcIiBocmVmPXt0aGlzLnN0YXRlLm91dHB1dEltYWdlVXJsfSBkb3dubG9hZD1cIm91dHB1dC5qcGdcIj7guYLguKvguKXguJQ8L2E+KTtcbiAgfVxuXG4gIHJlbmRlclNoYXJlQnV0dG9uKCkge1xuICAgIHJldHVybiAoPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCI2NDk1NjcyMzUyMzgzMzJcIiByZWRpcmVjdFVSST17YCR7c2l0ZVVybH0vdGhhbmt5b3VgfT5cbiAgICAgIDxTaGFyZSBocmVmPXt0aGlzLnN0YXRlLnNoYXJlZExpbmt9IGhhc2h0YWc9XCJMaW1pdGVkRWR1Y2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlLTIgZnVsbC13aWR0aFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9uU2hhcmVDbGljay5iaW5kKHRoaXMpfT7guYHguIrguKPguYw8L2J1dHRvbj5cbiAgICAgIDwvU2hhcmU+XG4gICAgPC9GYWNlYm9va1Byb3ZpZGVyPik7XG4gIH1cblxuICByZW5kZXJQcmVvcmRlckJ1dHRvbigpIHtcbiAgICByZXR1cm4gKDxhIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZS0zIGZ1bGwtd2lkdGhcIiBocmVmPVwiaHR0cHM6Ly90YWVqYWkuY29tL3RoL1wiPuC4quC4seC5iOC4h+C4i+C4t+C5ieC4reC5gOC4quC4t+C5ieC4rTwvYT4pO1xuICB9XG5cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qgc2hhcmVJZCA9IF8uZ2V0KHRoaXMucHJvcHMsICd1cmwucXVlcnkuc2hhcmVpZCcpO1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+TGltaXRlZCBFZHVjYXRpb248L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwi4LiE4Li44LiT4LiB4LmH4Liq4Liy4Lih4Liy4Lij4LiW4Lij4LmI4Lin4Lih4LmA4Lib4LmH4LiZ4Lit4Li14LiB4Lir4LiZ4Li24LmI4LiH4Lie4Lil4Lix4LiH4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4LmC4Lit4LiB4Liy4Liq4LiX4Liy4LiH4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4LmD4Lir4LmJ4LiB4Lix4Lia4LiZ4LmJ4Lit4LiH4LmG4LmE4LiU4LmJ4LiH4LmI4Liy4Lii4LmG4LmA4Lie4Li14Lii4LiH4LmB4LiE4LmI4LiE4Lil4Li04LiBXCIgLz5cbiAgICAgICAge3NoYXJlSWQgP1xuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YHNpdGVVcmw/c2hhcmVpZD0ke3NoYXJlSWR9YH0gLz4gOlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17c2l0ZVVybH0gLz5cbiAgICAgICAgfVxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwi4LiE4Li44LiT4LiE4Li04LiU4Lin4LmI4Liy4LmA4LiU4LmH4LiB4LiE4LiZ4LiZ4Lix4LmJ4LiZ4LiI4Liw4LmA4LiC4Li14Lii4LiZ4LiK4Li34LmI4Lit4LiE4Li44LiT4Lit4Lit4LiB4Lih4Liy4LmA4Lib4LmH4LiZ4Lit4Lii4LmI4Liy4LiH4LmE4LijP1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwi4LiE4Li44LiT4LiB4LmH4Liq4Liy4Lih4Liy4Lij4LiW4Lij4LmI4Lin4Lih4LmA4Lib4LmH4LiZ4Lit4Li14LiB4Lir4LiZ4Li24LmI4LiH4Lie4Lil4Lix4LiH4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4LmC4Lit4LiB4Liy4Liq4LiX4Liy4LiH4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4LmD4Lir4LmJ4LiB4Lix4Lia4LiZ4LmJ4Lit4LiH4LmG4LmE4LiU4LmJ4LiH4LmI4Liy4Lii4LmG4LmA4Lie4Li14Lii4LiH4LmB4LiE4LmI4LiE4Lil4Li04LiBXCIgLz5cbiAgICAgICAge3NoYXJlSWQgP1xuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtzaGFyZWRJbWFnZUJhc2VVcmx9JHtzaGFyZUlkfS5qcGdgfSAvPiA6XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vcGhvdG9jYW1wYWlnbi1zdG9yYWdlL2xpbWl0ZWRfd2Vic2l0ZV9zaGFyZS5qcGdcIiAvPlxuICAgICAgICB9XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+4Lil4Li04Lih4Li04LmA4LiV4LmH4LiUIOC5gOC4reC5h+C4lOC4lOC4ueC5gOC4hOC4iuC4seC5iOC4mTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlci1zdmdcIj5cbiAgICAgICAgICA8SXN2ZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9saW1pdGVkLWVkdWNhdGlvbi10ZXh0LWVuZy5zdmdcIiBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4JyB9fT48L0lzdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMCkgJiYgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtbmFtZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25UZXh0TmFtZUNoYWdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwi4LmC4Lib4Lij4LiU4LmD4Liq4LmI4LiK4Li34LmI4Lit4LiC4Lit4LiH4LiE4Li44LiT4LmD4LiZ4LiK4LmI4Lit4LiHLi4uXCIvPjxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnJlYWtwb2ludCBtYXhXaWR0aD17NzAwfSB3aWR0aE1ldGhvZD1cImNvbXBvbmVudFdpZHRoXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlLTIgZnVsbC13aWR0aFwiIG9uQ2xpY2s9e3RoaXMub25HZW5lcmF0ZUNsaWNrLmJpbmQodGhpcyl9PuC5geC4quC4lOC4h+C4nOC4pTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9CcmVha3BvaW50PlxuICAgICAgICAgICAgPEJyZWFrcG9pbnQgbWluV2lkdGg9ezcwMH0gd2lkdGhNZXRob2Q9XCJjb21wb25lbnRXaWR0aFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZS0yXCIgb25DbGljaz17dGhpcy5vbkdlbmVyYXRlQ2xpY2suYmluZCh0aGlzKX0+4LmB4Liq4LiU4LiH4Lic4LilPC9idXR0b24+XG4gICAgICAgICAgICA8L0JyZWFrcG9pbnQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAg4LiE4Li44LiT4Lij4Li54LmJ4Lij4Li24LmA4Lib4Lil4LmI4Liy4Lin4LmI4LiyLi4u4Lih4Li14LmA4LiU4LmH4LiB4LmE4LiX4Lii4Lih4Liy4LiB4LiB4Lin4LmI4LiyPGJyLz5cbiAgICAgICAgICAgICAgMTQwLDAwMCDguITguJnguJfguLXguYjguK3guYjguLLguJnguKvguJnguLHguIfguKrguLfguK3guYTguKHguYjguK3guK3guIE8YnIvPlxuICAgICAgICAgICAgICDguYHguKXguLAgMjcwLDAwMCDguITguJnguJfguLXguYjguYDguILguLXguKLguJnguKvguJnguLHguIfguKrguLfguK3guYTguKHguYjguYTguJTguYk8YnIvPlxuICAgICAgICAgICAgICDguITguLjguJPguITguLTguJTguKfguYjguLLguYDguJTguYfguIHguITguJnguJnguLHguYnguJnguIjguLDguYDguILguLXguKLguJnguIrguLfguYjguK3guITguLjguJPguK3guK3guIHguKHguLLguYDguJvguYfguJnguK3guKLguYjguLLguIfguYTguKM/XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+I0xpbWl0ZWRFZHVjYXRpb248L3NwYW4+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMSkgJiYgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPkxPQURJTkcuLi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyh0aGlzLnN0YXRlLnN0ZXAgPT09IDIpICYmIFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5vdXRwdXRJbWFnZVVybH0gY2xhc3NOYW1lPVwicHJldmlldy1nZW5lcmF0ZWQtaW1hZ2VcIi8+PGJyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD7guJnguLXguYjguITguLfguK3guKXguLLguKLguKHguLfguK3guIjguKPguLTguIfguILguK3guIfguYDguJTguYfguIHguJnguLHguIHguYDguKPguLXguKLguJkg4LmD4LiZ4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LmB4Lir4LmI4LiH4Lir4LiZ4Li24LmI4LiH4LiX4Li14LmI4Lir4LmI4Liy4LiH4LiI4Liy4LiB4LiB4Lij4Li44LiH4LmA4LiX4Lie4LmE4Lib4LmE4Lih4LmI4LiB4Li14LmI4LiB4Li04LmC4LilPC9wPlxuICAgICAgICAgICAgICA8cD7guITguLjguJPguKrguLLguKHguLLguKPguJbguKPguYjguKfguKHguYDguJvguYfguJnguK3guLXguIHguKvguJnguLbguYjguIfguJ7guKXguLHguIfguYPguJnguIHguLLguKPguKrguKPguYnguLLguIfguYLguK3guIHguLLguKrguJfguLLguIfguIHguLLguKPguKjguLbguIHguKnguLLguYPguKvguYnguIHguLHguJrguJnguYnguK3guIfguYbguYTguJTguYnguIfguYjguLLguKLguYbguYDguJ7guLXguKLguIfguYHguITguYg8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCcmVha3BvaW50IG1heFdpZHRoPXs3MDB9IHdpZHRoTWV0aG9kPVwiY29tcG9uZW50V2lkdGhcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCYWNrQnV0dG9uKCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRG93bmxvYWRCdXR0b24oKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTaGFyZUJ1dHRvbigpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclByZW9yZGVyQnV0dG9uKCl9XG4gICAgICAgICAgICAgIDwvQnJlYWtwb2ludD5cbiAgICAgICAgICAgICAgPEJyZWFrcG9pbnQgbWluV2lkdGg9ezcwMH0gd2lkdGhNZXRob2Q9XCJjb21wb25lbnRXaWR0aFwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMTcwLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPFNwYW4gY29sdW1ucz17M30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJhY2tCdXR0b24oKX1cbiAgICAgICAgICAgICAgICAgIDwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxTcGFuIGNvbHVtbnM9ezN9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEb3dubG9hZEJ1dHRvbigpfVxuICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gY29sdW1ucz17M30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNoYXJlQnV0dG9uKCl9XG4gICAgICAgICAgICAgICAgICA8L1NwYW4+XG4gICAgICAgICAgICAgICAgICA8U3BhbiBjb2x1bW5zPXszfSBsYXN0PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcmVvcmRlckJ1dHRvbigpfVxuICAgICAgICAgICAgICAgICAgPC9TcGFuPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9CcmVha3BvaW50PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgPFNwb25zb3JCYXIgLz5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsodGhpcy5zdGF0ZS5zdGVwID09PSAzKSAmJiBcbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMj5QcmVvcmRlcjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuC4iuC4t+C5iOC4reC4guC4reC4h+C4hOC4uOC4kzwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+4LmA4Lia4Lit4Lij4LmM4LmC4LiX4Lij4Lio4Lix4Lie4LiX4LmMPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guK3guLXguYDguKHguKU8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuC5hOC4i+C4quC5jOC5gOC4quC4t+C5ieC4reC4l+C4teC5iOC4leC5ieC4reC4h+C4geC4suC4ozwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5TICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPk0gKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+TCAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5YTCAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5YWEwgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+WFhYTCAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkJhY2tDbGljay5iaW5kKHRoaXMpfT5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25CYWNrQ2xpY2suYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlb1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6MCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgbWluV2lkdGg6ICcxMDB2dycsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG5cbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGF5U3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNyknLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzE1MCUnLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8dmlkZW8gYXV0b1BsYXkgc3R5bGU9e3ZpZGVvU3R5bGV9IGxvb3A+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3N0YXRpYy92aWRlb3MvdmlkZW8tMTQ5NjA0NzgyNi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgIDwvdmlkZW8+XG4gICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5U3R5bGV9PjwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmFja2dyb3VuZC12aWRlby5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IENvbnRhaW5lciwgQnJlYWtwb2ludCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtZ3JpZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3BvbnNvcnMgPSBbXG4gICAgICB7IG5hbWU6ICd5dXdhcGF0JywgaGVpZ2h0OiAnNThweCcsIGxpbms6ICdodHRwOi8vd3d3LnRlYWNoZm9ydGhhaWxhbmQub3JnL1RILycgfSxcbiAgICAgIHsgbmFtZTogJ3RlYWNoLWZvci10aGFpbGFuZCcsIGhlaWdodDogJzM5cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICdsZWFybi1lZHVjYXRpb24nLCBoZWlnaHQ6ICcyOXB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnZWR3aW5ncycsIGhlaWdodDogJzM0cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICdhLWNoaWV2ZScsIGhlaWdodDogJzU0cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICdncmV5aG91bmQnLCBoZWlnaHQ6ICcyNnB4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnc2NiJywgaGVpZ2h0OiAnNTRweCcsIGxpbms6ICdodHRwOi8vd3d3LnRlYWNoZm9ydGhhaWxhbmQub3JnL1RILycgfSxcbiAgICAgIHsgbmFtZTogJ3NpYW0tY29tbWVyY2lhbCcsIGhlaWdodDogJzU5cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgICB7IG5hbWU6ICdjaHVqYWknLCBoZWlnaHQ6ICc3M3B4JywgbGluazogJ2h0dHA6Ly93d3cudGVhY2hmb3J0aGFpbGFuZC5vcmcvVEgvJyB9LFxuICAgICAgeyBuYW1lOiAnZ2xvdycsIGhlaWdodDogJzQ0cHgnLCBsaW5rOiAnaHR0cDovL3d3dy50ZWFjaGZvcnRoYWlsYW5kLm9yZy9USC8nIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgIHBhZGRpbmc6ICcyMHB4IDEwcHgnLFxuICAgIH07XG5cbiAgICBjb25zdCBzcG9uc29yU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfTtcblxuICAgIGNvbnN0IHNwb25zb3JNb2JpbGVTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nOiAnNXB4IDIwcHgnXG4gICAgfTtcblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8QnJlYWtwb2ludCBtYXhXaWR0aD17NzAwfSB3aWR0aE1ldGhvZD1cImNvbXBvbmVudFdpZHRoXCI+XG4gICAgICAgIHtfLm1hcChzcG9uc29ycywgKHNwb25zb3IpID0+IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzcG9uc29yTW9iaWxlU3R5bGV9PlxuICAgICAgICAgICAgPGEgaHJlZj17c3BvbnNvci5saW5rfT48aW1nIHNyYz17YC9zdGF0aWMvaW1hZ2VzL3Nwb25zb3ItJHtzcG9uc29yLm5hbWV9LnBuZ2B9IHN0eWxlPXt7IHdpZHRoOiAnYXV0bycsIGhlaWdodDogc3BvbnNvci5oZWlnaHQgfX0gLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9CcmVha3BvaW50PlxuICAgICAgPEJyZWFrcG9pbnQgbWluV2lkdGg9ezcwMH0gd2lkdGhNZXRob2Q9XCJjb21wb25lbnRXaWR0aFwiPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXhXaWR0aDogMTE3MCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIHtfLm1hcChzcG9uc29ycywgKHNwb25zb3IpID0+IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Nwb25zb3JTdHlsZX0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Nwb25zb3IubGlua30+PGltZyBzcmM9e2Avc3RhdGljL2ltYWdlcy9zcG9uc29yLSR7c3BvbnNvci5uYW1lfS5wbmdgfSBzdHlsZT17eyB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6IHNwb25zb3IuaGVpZ2h0IH19IC8+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQnJlYWtwb2ludD5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Nwb25zb3ItYmFyLmpzIiwiY29uc3QgZ2VuZXJhdGVJbWFnZSA9IChuYW1lLCBjYikgPT4ge1xuICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xuICBiZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHcgPSAxMjAwO1xuICAgIGNvbnN0IGggPSA2MzA7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmcsIDAsIDAsIHcsIGgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjb25zdCBmb250U2l6ZSA9IDEwMDtcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IGxpbWl0ZWRfZWR1Y2F0aW9uYDtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC50ZXh0QWxpZ249XCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFRleHQobmFtZSwgdyAvIDIsIChoIC8gMikpO1xuICAgIGNiKGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAxLjApKTtcbiAgfTtcbiAgYmcuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL21vY2stdHNoaXJ0LmpwZyc7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVJbWFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9nZW5lcmF0ZS1pbWFnZS5qcyIsImNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vamNmMXZmdGVyaC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIlxuY29uc3Qgc2hhcmVJbWFnZSA9IChpbWFnZUJhc2U2NFN0cmluZywgY2IpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbiAgICByZXF1ZXN0XG4gICAgICAucG9zdChBUElfVVJMICsgJy9zaGFyZS1pbWFnZScpXG4gICAgICAuc2VuZCh7IGltYWdlOiBpbWFnZUJhc2U2NFN0cmluZyB9KVxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlSW1hZ2UgUmVzcG9uc2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY2IoZXJyLCBfLmdldChyZXMsICdib2R5LmlkJykpO1xuICAgICAgfSk7IFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVJbWFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZS5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgdHJhbnNmb3JtYXRpb25zID0gW1xuICB7IGZyb206ICfguIonLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ii9pLCAn4LiCJykpIH0sXG4gIHsgZnJvbTogJ+C4gicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiCL2ksICfguIonKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4pycpKSB9LFxuICB7IGZyb206ICfguKcnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4py9pLCAn4LiyJykpIH0sXG4gIHsgZnJvbTogJ+C4sScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LixL2ksICfguLQnKSkgfSxcbiAgeyBmcm9tOiAn4Li0JywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLQvaSwgJ+C4sScpKSB9LFxuICB7IGZyb206ICfguLUnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4tS9pLCAn4Li0JykpIH0sXG4gIHsgZnJvbTogJ+C4tCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4Li0L2ksICfguLUnKSkgfSxcbiAgeyBmcm9tOiAn4LieJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJ4vaSwgJ+C4nCcpKSB9LFxuICB7IGZyb206ICfguJwnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4nC9pLCAn4LieJykpIH0sXG4gIHsgZnJvbTogJ+C4sicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiyL2ksICfguLLguLInKSkgfSxcbiAgeyBmcm9tOiAn4LiCJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIIvaSwgJ+C4mycpKSB9LFxuICB7IGZyb206ICfguIInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gi9pLCAn4LiaJykpIH0sXG4gIHsgZnJvbTogJ+C4micsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiaL2ksICfguIInKSkgfSxcbiAgeyBmcm9tOiAn4LibJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJsvaSwgJ+C4gicpKSB9LFxuICB7IGZyb206ICfguJonLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4mi9pLCAn4LibJykpIH0sXG4gIHsgZnJvbTogJ+C4mycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LibL2ksICfguJonKSkgfSxcbiAgeyBmcm9tOiAn4LiUJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJQvaSwgJ+C4hCcpKSB9LFxuICB7IGZyb206ICfguIQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4hC9pLCAn4LiUJykpIH0sXG4gIHsgZnJvbTogJ+C4qicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiqL2ksICfguKUnKSkgfSxcbiAgeyBmcm9tOiAn4LilJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKUvaSwgJ+C4qicpKSB9LFxuICB7IGZyb206ICfguYEnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C5gS9pLCAn4LmAJykpIH0sXG4gIHsgZnJvbTogJ+C5gCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LmAL2ksICfguYEnKSkgfSxcbiAgeyBmcm9tOiAn4LiXJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJcvaSwgJ+C4qycpKSB9LFxuICB7IGZyb206ICfguKsnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4qy9pLCAn4LiXJykpIH0sXG4gIHsgZnJvbTogJ+C4gScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiBL2ksICfguLInKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4gScpKSB9LFxuICB7IGZyb206ICfguK0nLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4rS9pLCAn4LinJykpIH0sXG4gIHsgZnJvbTogJ+C4pycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LinL2ksICfguK0nKSkgfSxcbiAgeyBmcm9tOiAn4LiBJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIEvaSwgJ+C4lycpKSB9LFxuXTtcblxuY29uc3QgdHJhbnNmb3JtTmFtZSA9IChuYW1lKSA9PiB7XG4gIGxldCBvdXROYW1lID0gbmFtZTtcbiAgY29uc3QgbnVtRXJyb3JzID0gTWF0aC5jZWlsKG5hbWUubGVuZ3RoIC8gNSk7XG4gIGNvbnN0IHBvdGVudGlhbFRyYW5zZm9ybWF0aW9ucyA9ICBfLnNodWZmbGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0KSA9PiAobmFtZS5pbmRleE9mKHQuZnJvbSkgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICBjb25zb2xlLmxvZyhwb3RlbnRpYWxUcmFuc2Zvcm1hdGlvbnMpO1xuICBfLmZvckVhY2gocG90ZW50aWFsVHJhbnNmb3JtYXRpb25zLCAodCwgaSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHQpO1xuICAgIGlmIChpIDwgbnVtRXJyb3JzKSB7XG4gICAgICBvdXROYW1lID0gdC5mbihvdXROYW1lKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0TmFtZTtcbn07XG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1OYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL3RyYW5zZm9ybS1uYW1lLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFFQTtBQUFBOztBQUZBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7QUFqTUE7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVRBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVJBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTs7Ozs7O0FBOUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFZQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7Ozs7O0FBdkRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        