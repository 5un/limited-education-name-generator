
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
        styleId: 46931816,
        css: '\n            @font-face {\n              font-family: \'limited_education\';\n              src: url(\'/static/fonts/limited_education-webfont.eot\');\n              src: url(\'/static/fonts/limited_education-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/limited_education-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/limited_education-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/limited_education-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/limited_education-webfont.svg#limited_education\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n            }\n\n            @font-face {\n              font-family: \'DBHelvethaicaXRegular\';\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot\');\n              src: url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff2\') format(\'woff2\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.woff\') format(\'woff\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.ttf\') format(\'truetype\'),\n                   url(\'/static/fonts/db_helvethaica_x_v3.2-webfont.svg#DBHelvethaicaXRegular\') format(\'svg\');\n              font-weight: normal;\n              font-style: normal;\n\n            }\n\n            body {\n              background-color: black;\n              background-image: url(\'/static/images/bg-student.jpg\');\n              background-size: cover;\n              background-repeat: no-repeat;\n              background-position: center;\n              color: white;\n              text-align: center;\n              font-family: DBHelvethaicaXRegular;\n              font-size: 36px;\n              min-height: 100vh;\n            }\n\n            .page-container {\n              position: absolute;\n              width: 100%;\n              left:0;\n              top:0;\n            }\n\n            .page-header {\n              font-family: limited_education;\n              font-size: 80px;\n              margin-bottom: 0;\n            }\n            \n            .sub-header-svg {\n              width: 400px;\n              text-align: center;\n              margin: auto;\n              margin-bottom: 20px;\n            }\n\n            input, button, a.btn {\n              border: none; \n              height: 60px;\n              font-size: 36px;\n              font-family: DBHelvethaicaXRegular;\n            }\n\n            .input-name-container {\n              border: 4px solid rgba(255,255,255,0.5);\n              max-width: calc(100% - 40px);\n              width: 600px;\n              margin: auto;\n              margin-bottom: 20px;\n              border-radius: 4px;\n            }\n\n            input[type="text"] {\n              width: calc(100% - 40px);\n              padding: 0 20px;\n            }\n\n            button, a.btn {\n              display: inline-block;\n              text-decoration: none;\n              padding: 0px 40px;\n              line-height: 60px;\n              cursor: pointer;\n            }\n\n            .btn-default {\n              border-radius: 4px;\n              background: #bcbec1;\n              color: white;\n            }\n\n            .btn-blue-1 {\n              border-radius: 4px;\n              background: #2a96cc;\n              color: white;\n            }\n\n            .btn-blue-2 {\n              border-radius: 4px;\n              background: #005cb9;\n              color: white;\n            }\n\n            .btn-blue-3 {\n              border-radius: 4px;\n              background: #034784;\n              color: white;\n            }\n\n            input.input-name {\n              min-width: 320px;\n            }\n\n            img.preview-generated-image {\n              border: 2px solid #eee;\n              max-width: calc(100% - 20px);\n              width: 600px;\n              max-height: 315px;\n            }\n\n            .footer {\n              margin-top: 50px;\n              padding: 40px 20px;\n            }\n\n          '
      })), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/OTc2ZmY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuL3BhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoLi4uYXJncykge1xuICAgIC8vIGNvbnN0IHtodG1sLCBoZWFkLCBlcnJvckh0bWwsIGNodW5rc30gPSByZW5kZXJQYWdlKClcbiAgICAvLyBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgLy8gcmV0dXJuIHsgaHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3MsIHN0eWxlcyB9XG4gICAgY29uc3QgZG9jdW1lbnRQcm9wcyA9IGF3YWl0IHN1cGVyLmdldEluaXRpYWxQcm9wcyguLi5hcmdzKVxuICAgIHJldHVybiB7IC4uLmRvY3VtZW50UHJvcHMsIGhlbG1ldDogSGVsbWV0LnJld2luZCgpIH1cbiAgfVxuXG4gIC8vIHNob3VsZCByZW5kZXIgb24gPGh0bWw+XG4gIGdldCBoZWxtZXRIdG1sQXR0ckNvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpXG4gIH1cblxuICAvLyBzaG91bGQgcmVuZGVyIG9uIDxoZWFkPlxuICBnZXQgaGVsbWV0SGVhZENvbXBvbmVudHMgKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmhlbG1ldClcbiAgICAgICAgLmZpbHRlcihlbCA9PiBlbCAhPT0gJ2h0bWxBdHRyaWJ1dGVzJykgLy8gcmVtb3ZlIGh0bWxBdHRyaWJ1dGVzIHdoaWNoIGlzIG5vdCBmb3IgPGhlYWQ+IGJ1dCBmb3IgPGh0bWw+XG4gICAgICAgIC5tYXAoZWwgPT4gdGhpcy5wcm9wcy5oZWxtZXRbZWxdLnRvQ29tcG9uZW50KCkpXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gIV8uaXNFbXB0eShlbCkpXG4gIH1cblxuICBnZXQgaGVsbWV0SnN4ICgpIHtcbiAgICByZXR1cm4gKDxIZWxtZXRcbiAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7bGFuZzogJ2VuJ319XG4gICAgICB0aXRsZT0nSGVsbG8gbmV4dC5qcyEnXG4gICAgICBtZXRhPXtbXG4gICAgICAgIHsgbmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyB9XG4gICAgICBdfVxuICAgIC8+KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICA8aHRtbCB7Li4udGhpcy5oZWxtZXRIdG1sQXR0ckNvbXBvbmVudHN9PlxuICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRKc3ggfVxuICAgICAgICAgIHsgdGhpcy5oZWxtZXRIZWFkQ29tcG9uZW50cyB9XG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgIHtgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsaW1pdGVkX2VkdWNhdGlvbic7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LnN2ZyNsaW1pdGVkX2VkdWNhdGlvbicpIGZvcm1hdCgnc3ZnJyk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnREJIZWx2ZXRoYWljYVhSZWd1bGFyJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQuZW90Jyk7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdjMuMi13ZWJmb250LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdjMuMi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9kYl9oZWx2ZXRoYWljYV94X3YzLjItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2RiX2hlbHZldGhhaWNhX3hfdjMuMi13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZGJfaGVsdmV0aGFpY2FfeF92My4yLXdlYmZvbnQuc3ZnI0RCSGVsdmV0aGFpY2FYUmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvYmctc3R1ZGVudC5qcGcnKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERCSGVsdmV0aGFpY2FYUmVndWxhcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBhZ2UtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGxpbWl0ZWRfZWR1Y2F0aW9uO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zdWItaGVhZGVyLXN2ZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LCBidXR0b24sIGEuYnRuIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lOyBcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBEQkhlbHZldGhhaWNhWFJlZ3VsYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnB1dC1uYW1lLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uLCBhLmJ0biB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi1kZWZhdWx0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmNiZWMxO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0xIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmE5NmNjO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0yIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1Y2I5O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tYmx1ZS0zIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM0Nzg0O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LmlucHV0LW5hbWUge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcucHJldmlldy1nZW5lcmF0ZWQtaW1hZ2Uge1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICA8L0hlYWQ+XG4gICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiY3VzdG9tX2NsYXNzXCI+XG4gICAgICAgICB7dGhpcy5wcm9wcy5jdXN0b21WYWx1ZX1cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgIDwvYm9keT5cbiAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUxBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQWlDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF1SUE7QUF2SUE7QUF1SUE7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7OztBQXBLQTtBQUNBOztBQUNBO0FBQUE7QUFHQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUFBOztBQUhBO0FBT0E7QUFQQTtBQUNBOzs7Ozs7OztBQXZCQTs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        