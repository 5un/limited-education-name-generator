
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _backgroundVideo = __webpack_require__(590);

var _backgroundVideo2 = _interopRequireDefault(_backgroundVideo);

var _transformName = __webpack_require__(578);

var _transformName2 = _interopRequireDefault(_transformName);

var _generateTshirt = __webpack_require__(576);

var _generateTshirt2 = _interopRequireDefault(_generateTshirt);

var _shareImage = __webpack_require__(577);

var _shareImage2 = _interopRequireDefault(_shareImage);

var _reactInlinesvg = __webpack_require__(579);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
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

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateTShirt = function generateTShirt(name, cb) {
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
exports.default = generateTShirt;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/generate-tshirt.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/generate-tshirt.js"); } } })();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = "https://8zdq4c76j6.execute-api.us-east-1.amazonaws.com/dev";
var shareImage = function shareImage(imageBase64String, cb) {
  var request = __webpack_require__(581);
  request.post(API_URL + '/share-image').send({ image: imageBase64String }).end(function (err, res) {
    console.log('shareImage Response');
    console.log(res);
    cb(err, _.get(res, 'body.id'));
  });
};

exports.default = shareImage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/services/share-image.js"); } } })();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(574);

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

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

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
        width: '100%',
        height: 'auto'
      };

      var overlayStyle = {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0
      };

      return _react2.default.createElement('div', { style: containerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('video', { width: '100%', height: 'auto', autoPlay: true, style: videoStyle, loop: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('source', { src: '/static/videos/mother.mp4', type: 'video/mp4', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement('div', { style: overlayStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/components/background-video.js"); } } })();

/***/ })

},[589]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzU2YWI4ZmIiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvZ2VuZXJhdGUtdHNoaXJ0LmpzPzU2YWI4ZmIiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2hhcmUtaW1hZ2UuanM/NTZhYjhmYiIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy90cmFuc2Zvcm0tbmFtZS5qcz81NmFiOGZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmFja2dyb3VuZC12aWRlby5qcz81NmFiOGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCYWNrZ3JvdW5kVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXZpZGVvJ1xuaW1wb3J0IHRyYXNmb3JtTmFtZSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2Zvcm0tbmFtZSdcbmltcG9ydCBnZW5lcmF0ZVRTaGlydCBmcm9tICcuLi9zZXJ2aWNlcy9nZW5lcmF0ZS10c2hpcnQnXG5pbXBvcnQgc2hhcmVJbWFnZSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZS1pbWFnZSdcbmltcG9ydCBJc3ZnIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5cbmNvbnN0IHNoYXJlZEltYWdlQmFzZVVybCA9ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vcGhvdG9jYW1wYWlnbi1zdG9yYWdlLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHN0ZXA6IDAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICByZXR1cm4gcmVxXG4gICAgICA/IHsgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIH1cbiAgICAgIDogeyB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfVxuICB9XG5cbiAgb25HZW5lcmF0ZUNsaWNrKCkge1xuICAgIGdlbmVyYXRlVFNoaXJ0KHRoaXMuc3RhdGUub3V0cHV0TmFtZSwgKGltZ1VybCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IDEsIG91dHB1dEltYWdlVXJsOiBpbWdVcmwgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIG9uVGV4dE5hbWVDaGFnZShlKSB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0TmFtZTogdmFsLCBvdXRwdXROYW1lOiB0cmFzZm9ybU5hbWUodmFsKSB9KTtcbiAgfVxuXG4gIG9uQmFja0NsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGVwOiAwLCBpbnB1dE5hbWU6ICcnLCBvdXRwdXROYW1lOiAnJyB9KTtcbiAgfVxuXG4gIG9uQnV5Q2xpY2soKSB7XG4gICAgLy9UT0RPIE9wZW4gR29vZ2xlIEZvcm1zIFBhZ2VcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RlcDogMiB9KTtcbiAgfVxuXG4gIG9uU2hhcmVDbGljaygpIHtcbiAgICAvLyBUT0RPIFVwbG9hZCBpbWFnZSB0byB0aGUgc2VydmljZSBhbmQgZ2V0IHRoZSBpZCByZXNwb25zZVxuICAgIC8vIFNldCB0aGUgc2hhcmUgbGlua1xuICAgIC8vIE9wZW4gRkIgRGlhbG9nXG4gICAgY29uc3QgaW1hZ2VCYXNlNjRTdHJpbmcgPSB0aGlzLnN0YXRlLm91dHB1dEltYWdlVXJsLnNwbGl0KCcsJykucG9wKCk7XG4gICAgc2hhcmVJbWFnZShpbWFnZUJhc2U2NFN0cmluZywgKGVyciwgc2hhcmVkSWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHNoYXJlZElkKTtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVkTGluazogYC8/c2hhcmVfaWQke3NoYXJlZElkfWAgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnVybC5xdWVyeSk7XG4gICAgLy8gVE9ETyBmZXRjaCB0aGUgc2hhcmUgdXJsIGhlcmVcbiAgICAvLyBUT0RPIHB1dCBjdXN0b21pemVkIGhlYWRcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+4Lil4Li04Lih4Li04LmA4LiV4LmH4LiUIOC5gOC4reC5h+C4lOC4lOC4ueC5gOC4hOC4iuC4seC5iOC4mTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRlci1zdmdcIj5cbiAgICAgICAgICA8SXN2ZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9saW1pdGVkLWVkdWNhdGlvbi10ZXh0LWVuZy5zdmdcIiBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4JyB9fT48L0lzdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMCkgJiYgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dE5hbWVDaGFnZS5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIuC5guC4m+C4o+C4lOC5g+C4quC5iOC4iuC4t+C5iOC4reC4guC4reC4h+C4hOC4uOC4k+C5g+C4meC4iuC5iOC4reC4hy4uLlwiLz48YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsdWVcIiBvbkNsaWNrPXt0aGlzLm9uR2VuZXJhdGVDbGljay5iaW5kKHRoaXMpfT7guYHguKrguJTguIfguJzguKU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHRoaXMuc3RhdGUuc3RlcCA9PT0gMSkgJiYgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLm91dHB1dEltYWdlVXJsfSBjbGFzc05hbWU9XCJwcmV2aWV3LWdlbmVyYXRlZC1pbWFnZVwiLz48YnIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPuC4meC4teC5iOC4hOC4t+C4reC4peC4suC4ouC4oeC4t+C4reC4iOC4o+C4tOC4h+C4guC4reC4h+C5gOC4lOC5h+C4geC4meC4seC4geC5gOC4o+C4teC4ouC4mSDguYPguJnguYLguKPguIfguYDguKPguLXguKLguJnguYHguKvguYjguIfguKvguJnguLbguYjguIfguJfguLXguYjguKvguYjguLLguIfguIjguLLguIHguIHguKPguLjguIfguYDguJfguJ7guYTguJvguYTguKHguYjguIHguLXguYjguIHguLTguYLguKU8L3A+XG4gICAgICAgICAgICAgIDxwPuC4hOC4uOC4k+C4quC4suC4oeC4suC4o+C4luC4o+C5iOC4p+C4oeC5gOC4m+C5h+C4meC4reC4teC4geC4q+C4meC4tuC5iOC4h+C4nuC4peC4seC4h+C5g+C4meC4geC4suC4o+C4quC4o+C5ieC4suC4h+C5guC4reC4geC4suC4quC4l+C4suC4h+C4geC4suC4o+C4qOC4tuC4geC4qeC4suC5g+C4q+C5ieC4geC4seC4muC4meC5ieC4reC4h+C5huC5hOC4lOC5ieC4h+C5iOC4suC4ouC5huC5gOC4nuC4teC4ouC4h+C5geC4hOC5iDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PuC4ouC5ieC4reC4meC4geC4peC4seC4mjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPXt0aGlzLnN0YXRlLm91dHB1dEltYWdlVXJsfSBkb3dubG9hZD1cIm91dHB1dC5qcGdcIj7guYLguKvguKXguJQ8L2E+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblNoYXJlQ2xpY2suYmluZCh0aGlzKX0+4LmB4LiK4Lij4LmMPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkJ1eUNsaWNrLmJpbmQodGhpcyl9PuC4quC4t+C5iOC4reC4i+C4t+C5ieC4reC5gOC4quC4t+C5ieC4rTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyh0aGlzLnN0YXRlLnN0ZXAgPT09IDIpICYmIFxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgyPlByZW9yZGVyPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+4LiK4Li34LmI4Lit4LiC4Lit4LiH4LiE4Li44LiTPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7guYDguJrguK3guKPguYzguYLguJfguKPguKjguLHguJ7guJfguYw8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuC4reC4teC5gOC4oeC4pTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+4LmE4LiL4Liq4LmM4LmA4Liq4Li34LmJ4Lit4LiX4Li14LmI4LiV4LmJ4Lit4LiH4LiB4Liy4LijPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPlMgKOC4o+C4reC4muC4reC4gSAwIOC4meC4tOC5ieC4pyDguITguKfguLLguKHguKLguLLguKcgMCDguJnguLTguYnguKcpPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIvPiA8bGFiZWw+TSAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5MICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPlhMICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLz4gPGxhYmVsPlhYTCAo4Lij4Lit4Lia4Lit4LiBIDAg4LiZ4Li04LmJ4LinIOC4hOC4p+C4suC4oeC4ouC4suC4pyAwIOC4meC4tOC5ieC4pyk8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi8+IDxsYWJlbD5YWFhMICjguKPguK3guJrguK3guIEgMCDguJnguLTguYnguKcg4LiE4Lin4Liy4Lih4Lii4Liy4LinIDAg4LiZ4Li04LmJ4LinKTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQmFja0NsaWNrLmJpbmQodGhpcyl9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkJhY2tDbGljay5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICA8c3Bhbj4jTGltaXRlZEVkdWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJjb25zdCBnZW5lcmF0ZVRTaGlydCA9IChuYW1lLCBjYikgPT4ge1xuICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xuICBiZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHcgPSAxMjAwO1xuICAgIGNvbnN0IGggPSA2MzA7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmcsIDAsIDAsIHcsIGgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjb25zdCBmb250U2l6ZSA9IDEwMDtcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IGxpbWl0ZWRfZWR1Y2F0aW9uYDtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC50ZXh0QWxpZ249XCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFRleHQobmFtZSwgdyAvIDIsIChoIC8gMikpO1xuICAgIGNiKGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnLCAxLjApKTtcbiAgfTtcbiAgYmcuc3JjID0gJy9zdGF0aWMvaW1hZ2VzL21vY2stdHNoaXJ0LmpwZyc7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVUU2hpcnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvZ2VuZXJhdGUtdHNoaXJ0LmpzIiwiY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly84emRxNGM3Nmo2LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2RldlwiXG5jb25zdCBzaGFyZUltYWdlID0gKGltYWdlQmFzZTY0U3RyaW5nLCBjYikgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xuICAgIHJlcXVlc3RcbiAgICAgIC5wb3N0KEFQSV9VUkwgKyAnL3NoYXJlLWltYWdlJylcbiAgICAgIC5zZW5kKHsgaW1hZ2U6IGltYWdlQmFzZTY0U3RyaW5nIH0pXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVJbWFnZSBSZXNwb25zZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjYihlcnIsIF8uZ2V0KHJlcywgJ2JvZHkuaWQnKSk7XG4gICAgICB9KTsgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGFyZUltYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZpY2VzL3NoYXJlLWltYWdlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCB0cmFuc2Zvcm1hdGlvbnMgPSBbXG4gIHsgZnJvbTogJ+C4iicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiKL2ksICfguIInKSkgfSxcbiAgeyBmcm9tOiAn4LiCJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIIvaSwgJ+C4iicpKSB9LFxuICB7IGZyb206ICfguLInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4si9pLCAn4LinJykpIH0sXG4gIHsgZnJvbTogJ+C4pycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LinL2ksICfguLInKSkgfSxcbiAgeyBmcm9tOiAn4LixJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLEvaSwgJ+C4tCcpKSB9LFxuICB7IGZyb206ICfguLQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4tC9pLCAn4LixJykpIH0sXG4gIHsgZnJvbTogJ+C4tScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4Li1L2ksICfguLQnKSkgfSxcbiAgeyBmcm9tOiAn4Li0JywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLQvaSwgJ+C4tScpKSB9LFxuICB7IGZyb206ICfguJ4nLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ni9pLCAn4LicJykpIH0sXG4gIHsgZnJvbTogJ+C4nCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LicL2ksICfguJ4nKSkgfSxcbiAgeyBmcm9tOiAn4LiyJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guLIvaSwgJ+C4suC4sicpKSB9LFxuICB7IGZyb206ICfguIInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gi9pLCAn4LibJykpIH0sXG4gIHsgZnJvbTogJ+C4gicsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiCL2ksICfguJonKSkgfSxcbiAgeyBmcm9tOiAn4LiaJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJovaSwgJ+C4gicpKSB9LFxuICB7IGZyb206ICfguJsnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4my9pLCAn4LiCJykpIH0sXG4gIHsgZnJvbTogJ+C4micsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiaL2ksICfguJsnKSkgfSxcbiAgeyBmcm9tOiAn4LibJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guJsvaSwgJ+C4micpKSB9LFxuICB7IGZyb206ICfguJQnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4lC9pLCAn4LiEJykpIH0sXG4gIHsgZnJvbTogJ+C4hCcsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LiEL2ksICfguJQnKSkgfSxcbiAgeyBmcm9tOiAn4LiqJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKovaSwgJ+C4pScpKSB9LFxuICB7IGZyb206ICfguKUnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4pS9pLCAn4LiqJykpIH0sXG4gIHsgZnJvbTogJ+C5gScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LmBL2ksICfguYAnKSkgfSxcbiAgeyBmcm9tOiAn4LmAJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guYAvaSwgJ+C5gScpKSB9LFxuICB7IGZyb206ICfguJcnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4ly9pLCAn4LirJykpIH0sXG4gIHsgZnJvbTogJ+C4qycsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LirL2ksICfguJcnKSkgfSxcbiAgeyBmcm9tOiAn4LiBJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guIEvaSwgJ+C4sicpKSB9LFxuICB7IGZyb206ICfguLInLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4si9pLCAn4LiBJykpIH0sXG4gIHsgZnJvbTogJ+C4rScsIGZuOiAobmFtZSkgPT4gKG5hbWUucmVwbGFjZSgv4LitL2ksICfguKcnKSkgfSxcbiAgeyBmcm9tOiAn4LinJywgZm46IChuYW1lKSA9PiAobmFtZS5yZXBsYWNlKC/guKcvaSwgJ+C4rScpKSB9LFxuICB7IGZyb206ICfguIEnLCBmbjogKG5hbWUpID0+IChuYW1lLnJlcGxhY2UoL+C4gS9pLCAn4LiXJykpIH0sXG5dO1xuXG5jb25zdCB0cmFuc2Zvcm1OYW1lID0gKG5hbWUpID0+IHtcbiAgbGV0IG91dE5hbWUgPSBuYW1lO1xuICBjb25zdCBudW1FcnJvcnMgPSBNYXRoLmNlaWwobmFtZS5sZW5ndGggLyA1KTtcbiAgY29uc3QgcG90ZW50aWFsVHJhbnNmb3JtYXRpb25zID0gIF8uc2h1ZmZsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQpID0+IChuYW1lLmluZGV4T2YodC5mcm9tKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gIGNvbnNvbGUubG9nKHBvdGVudGlhbFRyYW5zZm9ybWF0aW9ucyk7XG4gIF8uZm9yRWFjaChwb3RlbnRpYWxUcmFuc2Zvcm1hdGlvbnMsICh0LCBpKSA9PiB7XG4gICAgY29uc29sZS5sb2codCk7XG4gICAgaWYgKGkgPCBudW1FcnJvcnMpIHtcbiAgICAgIG91dE5hbWUgPSB0LmZuKG91dE5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXROYW1lO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybU5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvdHJhbnNmb3JtLW5hbWUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlb1N0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBsZWZ0OjAsXG4gICAgICB0b3A6MCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGF5U3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuOCknLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8dmlkZW8gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiYXV0b1wiIGF1dG9QbGF5IHN0eWxlPXt2aWRlb1N0eWxlfSBsb29wPlxuICAgICAgICA8c291cmNlIHNyYz1cIi9zdGF0aWMvdmlkZW9zL21vdGhlci5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgIDwvdmlkZW8+XG4gICAgICA8ZGl2IHN0eWxlPXtvdmVybGF5U3R5bGV9PjwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmFja2dyb3VuZC12aWRlby5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBR0E7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQXhHQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVJBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTs7Ozs7O0FBN0JBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        