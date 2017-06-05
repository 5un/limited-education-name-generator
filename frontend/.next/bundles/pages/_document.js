
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
          lineNumber: 41
        }
      }), _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.helmetJsx, this.helmetHeadComponents, _react2.default.createElement(_style2.default, {
        styleId: 2092046608,
        css: '\n            @font-face {\n              font-family: \'DBHelvethaicaXRegular\';\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot\');\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.svg#DBHelvethaicaXRegular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n\n            }\n\n            @font-face {\n              font-family: \'DBHelvethaicaXUltraLight\';\n              src: url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot\');\n              src: url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.svg#DBHelvethaicaXUltraLight\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'limited_education\';\n              src: url(\'/static/fonts/limited_education-webfont.eot\');\n              src: url(\'/static/fonts/limited_education-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/limited_education-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/limited_education-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/limited_education-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/limited_education-webfont.svg#limited_education\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-patiparn\';\n              src: url(\'/static/fonts/patiparn-webfont.eot\');\n              src: url(\'/static/fonts/patiparn-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/patiparn-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/patiparn-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/patiparn-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/patiparn-webfont.svg#patiparnpatiparn\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-suradech\';\n              src: url(\'/static/fonts/suradech-webfont.eot\');\n              src: url(\'/static/fonts/suradech-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/suradech-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/suradech-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/suradech-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/suradech-webfont.svg#suradechsuradech\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n\n            }\n            \n            @font-face {\n              font-family: \'le-tanapon\';\n              src: url(\'/static/fonts/tanapon-webfont.eot\');\n              src: url(\'/static/fonts/tanapon-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tanapon-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tanapon-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tanapon-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tanapon-webfont.svg#tanaponregular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-tanatorn\';\n              src: url(\'/static/fonts/tanatorn-webfont.eot\');\n              src: url(\'/static/fonts/tanatorn-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tanatorn-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tanatorn-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tanatorn-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tanatorn-webfont.svg#tanatorntanatorn\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'le-tang\';\n              src: url(\'/static/fonts/tang-webfont.eot\');\n              src: url(\'/static/fonts/tang-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/tang-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/tang-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/tang-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/tang-webfont.svg#tangregular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            body {\n              margin: 0;\n              padding: 0;\n              border: 0;\n              background-color: black;\n              background-size: cover;\n              background-repeat: no-repeat;\n              background-position: center;\n              color: white;\n              text-align: center;\n              font-family: DBHelvethaicaXUltraLight;\n              font-size: 24px;\n              min-height: 100vh;\n            }\n\n            b, strong {\n              font-family: DBHelvethaicaXRegular;\n              font-weight: normal;\n            }\n\n            .page-container {\n              width: 100%\n            }\n\n            .page-header {\n              font-family: limited_education;\n              font-size: 80px;\n              font-weight: normal;\n              margin-bottom: 0;\n            }\n\n            @media (max-width: 600px) {\n              .page-header {\n                font-size: 60px;\n              }\n            }\n            \n            .sub-header-svg {\n              width: 400px;\n              text-align: center;\n              margin: auto;\n              margin-bottom: 20px;\n            }\n\n            input, button, a.btn {\n              border: none; \n              height: 60px;\n              font-size: 36px;\n              font-family: DBHelvethaicaXRegular;\n            }\n\n            .input-name-container {\n              background: rgba(255,255,255,0.1);\n              max-width: 80%;\n              width: 600px;\n              margin: 0 auto 20px auto;\n              border-radius: 4px;\n              padding: 5px;\n            }\n\n            .input-name {\n              border: 1px solid white;\n              border-radius: 4px;\n              background: transparent;\n              color: white;\n            }\n\n            input[type="text"] {\n              width: calc(100% - 40px);\n              padding: 0 20px;\n            }\n\n            button, a.btn {\n              display: inline-block;\n              text-decoration: none;\n              padding: 0px 40px;\n              line-height: 60px;\n              cursor: pointer;\n            }\n\n            .btn-default, a.btn-default {\n              background: transparent;\n              color: white;\n              border: 1px solid white;\n              transition: background-color 0.5s;\n            }\n\n            .btn-default:hover {\n              background-color: rgba(255, 255, 255, 0.3);\n            }\n\n            .btn-yellow {\n              background: #f9cb0b;\n              color: white;\n              transition: background-color 0.5s;\n            }\n\n            .btn-yellow:hover {\n              background: #ffdb43;\n              color: white;\n            }\n\n            .btn-blue-1 {\n              border-radius: 4px;\n              background: #2a96cc;\n              color: white;\n            }\n\n            .btn-blue-2 {\n              border-radius: 4px;\n              background: #005cb9;\n              color: white;\n            }\n\n            .btn-blue-3 {\n              border-radius: 4px;\n              background: #034784;\n              color: white;\n            }\n\n            a.full-width, button.full-width {\n              padding-left: 0;\n              padding-right: 0;\n              width: 100%;\n            }\n\n            input.input-name {\n              min-width: 320px;\n            }\n\n            img.preview-generated-image {\n              border: 2px solid #eee;\n              max-width: calc(100% - 20px);\n              width: 600px;\n              max-height: 315px;\n            }\n\n            .footer {\n              margin-top: 50px;\n            }\n\n            .margin-bottom-20 {\n              margin-bottom: 20px;\n            }\n\n          '
      })), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
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
        title: 'Hello next.js!',
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/NmYyYTJmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3BhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoLi4uYXJncykge1xuICAgIC8vIGNvbnN0IHtodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rc30gPSByZW5kZXJQYWdlKClcbiAgICAvLyBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgLy8gcmV0dXJuIHsgaHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3MsIHN0eWxlcyB9XG4gICAgY29uc3QgZG9jdW1lbnRQcm9wcyA9IGF3YWl0IHN1cGVyLmdldEluaXRpYWxQcm9wcyguLi5hcmdzKVxuICAgIHJldHVybiB7IC4uLmRvY3VtZW50UHJvcHMsIGhlbG1ldDogSGVsbWV0LnJld2luZCgpIH1cbiAgfVxuXG4gIC8vIHNob3VsZCByZW5kZXIgb24gPGh0bWw+XG4gIGdldCBoZWxtZXRIdG1sQXR0ckNvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpXG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxoZWFkPlxuICBnZXQgaGVsbWV0SGVhZENvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmhlbG1ldClcbiAgICAgICAgLmZpbHRlcihlbCA9PiBlbCAhPT0gJ2h0bWxBdHRyaWJ1dGVzJykgLy8gcmVtb3ZlIGh0bWxBdHRyaWJ1dGVzIHdoaWNoIGlzIG5vdCBmb3IgPGhlYWQ+IGJ1dCBmb3IgPGh0bWw+XG4gICAgICAgIC5tYXAoZWwgPT4gdGhpcy5wcm9wcy5oZWxtZXRbZWxdLnRvQ29tcG9uZW50KCkpXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gIV8uaXNFbXB0eShlbCkpXG4gIH1cblxuICBnZXQgaGVsbWV0SnN4ICgpIHtcbiAgICByZXR1cm4gKDxIZWxtZXRcbiAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7bGFuZzogJ2VuJ319XG4gICAgICB0aXRsZT0nSGVsbG8gbmV4dC5qcyEnXG4gICAgICBtZXRhPXtbXG4gICAgICAgIHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyB9XG4gICAgICBdfVxuICAgIC8+KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICA8aHRtbCB7Li4udGhpcy5oZWxtZXRIdG1sQXR0ckNvbXBvbmVudHN9PlxuICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRKc3ggfVxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRIZWFkQ29tcG9uZW50cyB9XG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdEQkhlbHZldGhhaWNhWFJlZ3VsYXInO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3YzLjItd2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdjMuMi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3YzLjItd2ViZm9udC5zdmcjREJIZWx2ZXRoYWljYVhSZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0RCSGVsdmV0aGFpY2FYVWx0cmFMaWdodCc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF91bGxpX3YzLjItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF91bGxpX3YzLjItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdWxsaV92My4yLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3VsbGlfdjMuMi13ZWJmb250LnN2ZyNEQkhlbHZldGhhaWNhWFVsdHJhTGlnaHQnKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xpbWl0ZWRfZWR1Y2F0aW9uJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQuc3ZnI2xpbWl0ZWRfZWR1Y2F0aW9uJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsZS1wYXRpcGFybic7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvcGF0aXBhcm4td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvcGF0aXBhcm4td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3BhdGlwYXJuLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9wYXRpcGFybi13ZWJmb250LnN2ZyNwYXRpcGFybnBhdGlwYXJuJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsZS1zdXJhZGVjaCc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvc3VyYWRlY2gtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvc3VyYWRlY2gtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3N1cmFkZWNoLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9zdXJhZGVjaC13ZWJmb250LnN2ZyNzdXJhZGVjaHN1cmFkZWNoJykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmFwb24nO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy90YW5hcG9uLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hcG9uLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmFwb24td2ViZm9udC5zdmcjdGFuYXBvbnJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmF0b3JuJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC5lb3QnKTtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hdG9ybi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5hdG9ybi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvdGFuYXRvcm4td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3RhbmF0b3JuLXdlYmZvbnQuc3ZnI3RhbmF0b3JudGFuYXRvcm4nKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2xlLXRhbmcnO1xuICAgICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy90YW5nLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy90YW5nLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL3Rhbmctd2ViZm9udC5zdmcjdGFuZ3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEQkhlbHZldGhhaWNhWFVsdHJhTGlnaHQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGIsIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEQkhlbHZldGhhaWNhWFJlZ3VsYXI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBsaW1pdGVkX2VkdWNhdGlvbjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgLnBhZ2UtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnN1Yi1oZWFkZXItc3ZnIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQsIGJ1dHRvbiwgYS5idG4ge1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7IFxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERCSGVsdmV0aGFpY2FYUmVndWxhcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlucHV0LW5hbWUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtbmFtZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiwgYS5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tZGVmYXVsdCwgYS5idG4tZGVmYXVsdCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tZGVmYXVsdDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi15ZWxsb3cge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjljYjBiO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi15ZWxsb3c6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkYjQzO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0xIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmE5NmNjO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0yIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1Y2I5O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0zIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM0Nzg0O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEuZnVsbC13aWR0aCwgYnV0dG9uLmZ1bGwtd2lkdGgge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5pbnB1dC1uYW1lIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLnByZXZpZXctZ2VuZXJhdGVkLWltYWdlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXJnaW4tYm90dG9tLTIwIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9IZWFkPlxuICAgICAgIDxib2R5IGNsYXNzTmFtZT1cImN1c3RvbV9jbGFzc1wiPlxuICAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tVmFsdWV9XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICA8L2JvZHk+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBMlBBO0FBM1BBO0FBMlBBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBOzs7QUF4UkE7QUFDQTs7QUFDQTtBQUFBO0FBR0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7Ozs7Ozs7QUF2QkE7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        