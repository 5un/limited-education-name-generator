
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(67);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = __webpack_require__(149);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get3 = __webpack_require__(249);

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(564);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(445);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(237);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(525);

var _lodash = __webpack_require__(428);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/_document.js?entry';
// ./pages/_document.js


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', (0, _extends3.default)({}, this.helmetHtmlAttrComponents, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.helmetJsx, this.helmetHeadComponents, _react2.default.createElement(_style2.default, {
        styleId: 1261081130,
        css: '\n            @font-face {\n              font-family: \'DBHelvethaicaXRegular\';\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot\');\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.svg#DBHelvethaicaXRegular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n\n            }\n\n            @font-face {\n              font-family: \'DBHelvethaicaXUltraLight\';\n              src: url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot\');\n              src: url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.svg#DBHelvethaicaXUltraLight\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'limited_education\';\n              src: url(\'/static/fonts/limited_education-webfont.eot\');\n              src: url(\'/static/fonts/limited_education-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/limited_education-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/limited_education-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/limited_education-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/limited_education-webfont.svg#limited_education\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-patiparn\';\n              src: url(\'/static/fonts/patiparn-webfont.eot\');\n              src: url(\'/static/fonts/patiparn-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/patiparn-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/patiparn-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/patiparn-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/patiparn-webfont.svg#patiparnpatiparn\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-suradech\';\n              src: url(\'/static/fonts/suradech-webfont.eot\');\n              src: url(\'/static/fonts/suradech-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/suradech-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/suradech-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/suradech-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/suradech-webfont.svg#suradechsuradech\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n\n            }\n            \n            @font-face {\n              font-family: \'le-tanapon\';\n              src: url(\'/static/fonts/tanapon-webfont.eot\');\n              src: url(\'/static/fonts/tanapon-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tanapon-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tanapon-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tanapon-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tanapon-webfont.svg#tanaponregular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-tanatorn\';\n              src: url(\'/static/fonts/tanatorn-webfont.eot\');\n              src: url(\'/static/fonts/tanatorn-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tanatorn-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tanatorn-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tanatorn-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tanatorn-webfont.svg#tanatorntanatorn\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-tang\';\n              src: url(\'/static/fonts/tang-webfont.eot\');\n              src: url(\'/static/fonts/tang-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tang-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tang-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tang-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tang-webfont.svg#tangregular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n            \n            * {\n              -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n              -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n              box-sizing: border-box;         /* Opera/IE 8+ */\n            }\n\n            body {\n              margin: 0;\n              padding: 0;\n              border: 0;\n              background-color: black;\n              background-size: cover;\n              background-repeat: no-repeat;\n              background-position: center;\n              color: white;\n              text-align: center;\n              font-family: DBHelvethaicaXUltraLight;\n              font-size: 24px;\n              min-height: 100vh;\n            }\n\n            b, strong {\n              font-family: DBHelvethaicaXRegular;\n              font-weight: normal;\n            }\n\n            .page-container {\n              width: 100%;\n              padding: 20px;\n\n            }\n\n            .page-header {\n              font-family: limited_education;\n              font-size: 80px;\n              font-weight: normal;\n              margin-bottom: 0;\n            }\n\n            @media (max-width: 600px) {\n              .page-header {\n                font-size: 60px;\n              }\n            }\n            \n            .sub-header-svg {\n              width: 400px;\n              text-align: center;\n              margin: auto;\n              margin-bottom: 20px;\n            }\n\n            input, button, a.btn {\n              border: none; \n              height: 60px;\n              font-size: 36px;\n              font-family: DBHelvethaicaXRegular;\n            }\n\n            .input-name-container {\n              background: rgba(255,255,255,0.1);\n              max-width: 600px;\n              margin: 0 auto 20px auto;\n              border-radius: 4px;\n              padding: 5px;\n            }\n\n            .input-name {\n              border: 1px solid white;\n              border-radius: 4px;\n              background: transparent;\n              color: white;\n              width: 100%;\n            }\n\n            button, a.btn {\n              display: inline-block;\n              text-decoration: none;\n              padding: 0px 40px;\n              line-height: 60px;\n              cursor: pointer;\n            }\n  \n            .btn-default, a.btn-default {\n              background: transparent;\n              color: white;\n              border: 1px solid white;\n              transition: background-color 0.5s;\n            }\n\n            .btn-default:hover {\n              background-color: rgba(255, 255, 255, 0.3);\n            }\n\n            .btn-transparent, a.btn-transparent {\n              background: transparent;\n              color: white;\n            }\n\n            .btn-yellow {\n              background: #f9cb0b;\n              color: white;\n              transition: background-color 0.5s;\n            }\n\n            .btn-yellow:hover {\n              background: #ffdb43;\n              color: white;\n            }\n\n            .btn-blue-1 {\n              border-radius: 4px;\n              background: #2a96cc;\n              color: white;\n            }\n\n            .btn-blue-2 {\n              border-radius: 4px;\n              background: #005cb9;\n              color: white;\n            }\n\n            .btn-blue-3 {\n              border-radius: 4px;\n              background: #034784;\n              color: white;\n            }\n\n            a.full-width, button.full-width {\n              padding-left: 0;\n              padding-right: 0;\n              width: 100%;\n            }\n\n            @media (max-width: 600px) {\n              button.btn, a.btn {\n                width: 100%;\n              }\n            }\n\n            input.input-name {\n              min-width: 320px;\n            }\n\n            img.preview-generated-image {\n              border: 2px solid #eee;\n              max-width: calc(100% - 20px);\n              width: 600px;\n              max-height: 315px;\n            }\n\n            .footer {\n              margin-top: 50px;\n            }\n\n            .margin-bottom-20 {\n              margin-bottom: 20px;\n            }\n\n            .loader,\n              .loader:after {\n                border-radius: 50%;\n                width: 10em;\n                height: 10em;\n              }\n              .loader {\n                margin: 60px auto;\n                font-size: 10px;\n                position: relative;\n                text-indent: -9999em;\n                border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n                border-left: 1.1em solid #ffffff;\n                -webkit-transform: translateZ(0);\n                -ms-transform: translateZ(0);\n                transform: translateZ(0);\n                -webkit-animation: load8 1.1s infinite linear;\n                animation: load8 1.1s infinite linear;\n              }\n              @-webkit-keyframes load8 {\n                0% {\n                  -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n                }\n                100% {\n                  -webkit-transform: rotate(360deg);\n                  transform: rotate(360deg);\n                }\n              }\n              @keyframes load8 {\n                0% {\n                  -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n                }\n                100% {\n                  -webkit-transform: rotate(360deg);\n                  transform: rotate(360deg);\n                }\n              }\n\n          '
      })), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      })));
    }
  }, {
    key: 'helmetHtmlAttrComponents',

    // should render on <html>
    get: function get() {
      return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <head>

  }, {
    key: 'helmetHeadComponents',
    get: function get() {
      var _this2 = this;

      return (0, _keys2.default)(this.props.helmet).filter(function (el) {
        return el !== 'htmlAttributes';
      }) // remove htmlAttributes which is not for <head> but for <html>
      .map(function (el) {
        return _this2.props.helmet[el].toComponent();
      }).filter(function (el) {
        return !_lodash2.default.isEmpty(el);
      });
    }
  }, {
    key: 'helmetJsx',
    get: function get() {
      return _react2.default.createElement(_reactHelmet.Helmet, {
        htmlAttributes: { lang: 'en' },
        title: 'Limited Education',
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'description', content: 'มีเด็กไทยมากกว่า 140,000 คนที่อ่านหนังสือไม่ออก และ 270,000 คนที่เขียนหนังสือไม่ได้ คุณเองสามารถช่วยกัน ดีไซน์ การศึกษาในประเทศของเราให้ดีขึ้นได้' }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _get2;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var documentProps;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (_get2 = (0, _get4.default)(MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument), 'getInitialProps', this)).call.apply(_get2, [this].concat((0, _toConsumableArray3.default)(args)));

              case 2:
                documentProps = _context.sent;
                return _context.abrupt('return', (0, _extends3.default)({}, documentProps, { helmet: _reactHelmet.Helmet.rewind() }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ })

},[571]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NzM4NGEyYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3BhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoLi4uYXJncykge1xuICAgIC8vIGNvbnN0IHtodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rc30gPSByZW5kZXJQYWdlKClcbiAgICAvLyBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgLy8gcmV0dXJuIHsgaHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3MsIHN0eWxlcyB9XG4gICAgY29uc3QgZG9jdW1lbnRQcm9wcyA9IGF3YWl0IHN1cGVyLmdldEluaXRpYWxQcm9wcyguLi5hcmdzKVxuICAgIHJldHVybiB7IC4uLmRvY3VtZW50UHJvcHMsIGhlbG1ldDogSGVsbWV0LnJld2luZCgpIH1cbiAgfVxuXG4gIC8vIHNob3VsZCByZW5kZXIgb24gPGh0bWw+XG4gIGdldCBoZWxtZXRIdG1sQXR0ckNvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpXG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxoZWFkPlxuICBnZXQgaGVsbWV0SGVhZENvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmhlbG1ldClcbiAgICAgICAgLmZpbHRlcihlbCA9PiBlbCAhPT0gJ2h0bWxBdHRyaWJ1dGVzJykgLy8gcmVtb3ZlIGh0bWxBdHRyaWJ1dGVzIHdoaWNoIGlzIG5vdCBmb3IgPGhlYWQ+IGJ1dCBmb3IgPGh0bWw+XG4gICAgICAgIC5tYXAoZWwgPT4gdGhpcy5wcm9wcy5oZWxtZXRbZWxdLnRvQ29tcG9uZW50KCkpXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gIV8uaXNFbXB0eShlbCkpXG4gIH1cblxuICBnZXQgaGVsbWV0SnN4ICgpIHtcbiAgICByZXR1cm4gKDxIZWxtZXRcbiAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7bGFuZzogJ2VuJ319XG4gICAgICB0aXRsZT0nTGltaXRlZCBFZHVjYXRpb24nXG4gICAgICBtZXRhPXtbXG4gICAgICAgIHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyB9LFxuICAgICAgICB7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICfguKHguLXguYDguJTguYfguIHguYTguJfguKLguKHguLLguIHguIHguKfguYjguLIgMTQwLDAwMCDguITguJnguJfguLXguYjguK3guYjguLLguJnguKvguJnguLHguIfguKrguLfguK3guYTguKHguYjguK3guK3guIEg4LmB4Lil4LiwIDI3MCwwMDAg4LiE4LiZ4LiX4Li14LmI4LmA4LiC4Li14Lii4LiZ4Lir4LiZ4Lix4LiH4Liq4Li34Lit4LmE4Lih4LmI4LmE4LiU4LmJIOC4hOC4uOC4k+C5gOC4reC4h+C4quC4suC4oeC4suC4o+C4luC4iuC5iOC4p+C4ouC4geC4seC4mSDguJTguLXguYTguIvguJnguYwg4LiB4Liy4Lij4Lio4Li24LiB4Lip4Liy4LmD4LiZ4Lib4Lij4Liw4LmA4LiX4Lio4LiC4Lit4LiH4LmA4Lij4Liy4LmD4Lir4LmJ4LiU4Li14LiC4Li24LmJ4LiZ4LmE4LiU4LmJJyB9XG4gICAgICBdfVxuICAgIC8+KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICA8aHRtbCB7Li4udGhpcy5oZWxtZXRIdG1sQXR0ckNvbXBvbmVudHN9PlxuICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRKc3ggfVxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRIZWFkQ29tcG9uZW50cyB9XG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdEQkhlbHZldGhhaWNhWFJlZ3VsYXInO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3YzLjItd2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdjMuMi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3YzLjItd2ViZm9udC5zdmcjREJIZWx2ZXRoYWljYVhSZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0RCSGVsdmV0aGFpY2FYVWx0cmFMaWdodCc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF91bGxpX3YzLjItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF91bGxpX3YzLjItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3VsbGlfdjMuMi13ZWJmb250LnN2ZyNEQkhlbHZldGhhaWNhWFVsdHJhTGlnaHQnKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xpbWl0ZWRfZWR1Y2F0aW9uJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQuc3ZnI2xpbWl0ZWRfZWR1Y2F0aW9uJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsZS1wYXRpcGFybic7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvcGF0aXBhcm4td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvcGF0aXBhcm4td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9wYXRpcGFybi13ZWJmb250LnN2ZyNwYXRpcGFybnBhdGlwYXJuJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsZS1zdXJhZGVjaCc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvc3VyYWRlY2gtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvc3VyYWRlY2gtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9zdXJhZGVjaC13ZWJmb250LnN2ZyNzdXJhZGVjaHN1cmFkZWNoJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmFwb24nO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy90YW5hcG9uLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hcG9uLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC5zdmcjdGFuYXBvbnJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmF0b3JuJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hdG9ybi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hdG9ybi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmF0b3JuLXdlYmZvbnQuc3ZnI3RhbmF0b3JudGFuYXRvcm4nKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmcnO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy90YW5nLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5nLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC5zdmcjdGFuZ3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuICAgICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgICAgICAgLyogT3BlcmEvSUUgOCsgKi9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERCSGVsdmV0aGFpY2FYVWx0cmFMaWdodDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYiwgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERCSGVsdmV0aGFpY2FYUmVndWxhcjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGxpbWl0ZWRfZWR1Y2F0aW9uO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAucGFnZS1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc3ViLWhlYWRlci1zdmcge1xuICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dCwgYnV0dG9uLCBhLmJ0biB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsgXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogREJIZWx2ZXRoYWljYVhSZWd1bGFyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtbmFtZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnB1dC1uYW1lIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiwgYS5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgLmJ0bi1kZWZhdWx0LCBhLmJ0bi1kZWZhdWx0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLXRyYW5zcGFyZW50LCBhLmJ0bi10cmFuc3BhcmVudCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4teWVsbG93IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5Y2IwYjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4teWVsbG93OmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGI0MztcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWJsdWUtMSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJhOTZjYztcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWJsdWUtMiB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNWNiOTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWJsdWUtMyB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzNDc4NDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhLmZ1bGwtd2lkdGgsIGJ1dHRvbi5mdWxsLXdpZHRoIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5idG4sIGEuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5pbnB1dC1uYW1lIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLnByZXZpZXctZ2VuZXJhdGVkLWltYWdlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXJnaW4tYm90dG9tLTIwIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvYWRlcixcbiAgICAgICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBsb2FkOCB7XG4gICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgIDwvSGVhZD5cbiAgICAgICA8Ym9keSBjbGFzc05hbWU9XCJjdXN0b21fY2xhc3NcIj5cbiAgICAgICAgIHt0aGlzLnByb3BzLmN1c3RvbVZhbHVlfVxuICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgPC9ib2R5PlxuICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1UQTtBQW5UQTtBQW1UQTtBQUNBO0FBREE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUlBO0FBSkE7QUFBQTs7O0FBalZBO0FBQ0E7O0FBQ0E7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUZBO0FBR0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7O0FBSEE7QUFRQTtBQVJBO0FBQ0E7Ozs7Ozs7O0FBdkJBOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        