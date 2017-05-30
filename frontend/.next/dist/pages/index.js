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

var _sponsorBar = require('../components/sponsor-bar');

var _sponsorBar2 = _interopRequireDefault(_sponsorBar);

var _transformName = require('../services/transform-name');

var _transformName2 = _interopRequireDefault(_transformName);

var _generateImage = require('../services/generate-image');

var _generateImage2 = _interopRequireDefault(_generateImage);

var _shareImage = require('../services/share-image');

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = require('react-inlinesvg');

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _reactHelmet = require('react-helmet');

var _reactShare = require('react-share');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactFacebook = require('react-facebook');

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