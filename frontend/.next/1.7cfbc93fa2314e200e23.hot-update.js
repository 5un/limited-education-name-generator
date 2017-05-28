webpackHotUpdate(1,{

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _style = __webpack_require__(550);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(435);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(235);

var _server2 = _interopRequireDefault(_server);

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
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 1763905280,
        css: '\n          @font-face {\n            font-family: \'limited_education\';\n            src: url(\'/static/fonts/limited_education-webfont.eot\');\n            src: url(\'/static/fonts/limited_education-webfont.eot?#iefix\') format(\'embedded-opentype\'),\n                 url(\'/static/fonts/limited_education-webfont.woff2\') format(\'woff2\'),\n                 url(\'/static/fonts/limited_education-webfont.woff\') format(\'woff\'),\n                 url(\'/static/fonts/limited_education-webfont.ttf\') format(\'truetype\'),\n                 url(\'/static/fonts/limited_education-webfont.svg#limited_education\') format(\'svg\');\n            font-weight: normal;\n            font-style: normal;\n          }\n\n          body {\n            background-color: black;\n            background-image: url(\'/static/images/bg-student.jpg\');\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: center;\n            color: white;\n            text-align: center;\n            font-size: 36px;\n            min-height: 100vh;\n          }\n\n          .page-container {\n            position: absolute;\n            width: 100%;\n            left:0;\n            top:0;\n          }\n\n          .page-header {\n            font-family: limited_education;\n            font-size: 100px;\n          }\n          \n          .sub-header-svg {\n            width: 400px;\n            text-align: center;\n            margin: auto;\n            margin-bottom: 20px;\n          }\n\n          input, button, a.btn {\n            border: none; \n            height: 60px;\n            font-size: 36px;\n            border-radius: 4px;\n            padding: 0px 40px;\n            margin-bottom: 20px;\n          }\n\n          .btn-blue {\n            background: #034ea1;\n            color: white;\n          }\n\n          input.input-name {\n            min-width: 320px;\n            max-width: 100%;\n          }\n\n          img.preview-generated-image {\n            border: 2px solid #eee;\n            max-width: 600px;\n            max-height: 315px;\n          }\n\n          .footer {\n            margin-top: 50px;\n          }\n\n        '
      })), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Sun/Projects/85_PhotoCampaign/Development/photo-campaign/frontend/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS43Y2ZiYzkzZmEyMzE0ZTIwMGUyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzQ0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLi9wYWdlcy9fZG9jdW1lbnQuanNcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7aHRtbCwgaGVhZCwgZXJyb3JIdG1sLCBjaHVua3N9ID0gcmVuZGVyUGFnZSgpXG4gICAgY29uc3Qgc3R5bGVzID0gZmx1c2goKVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIGVycm9ySHRtbCwgY2h1bmtzLCBzdHlsZXMgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICA8aHRtbD5cbiAgICAgICA8SGVhZD5cblxuICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICB7YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdsaW1pdGVkX2VkdWNhdGlvbic7XG4gICAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LmVvdCcpO1xuICAgICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2xpbWl0ZWRfZWR1Y2F0aW9uLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvbGltaXRlZF9lZHVjYXRpb24td2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9saW1pdGVkX2VkdWNhdGlvbi13ZWJmb250LnN2ZyNsaW1pdGVkX2VkdWNhdGlvbicpIGZvcm1hdCgnc3ZnJyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JnLXN0dWRlbnQuanBnJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbGltaXRlZF9lZHVjYXRpb247XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuc3ViLWhlYWRlci1zdmcge1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCwgYnV0dG9uLCBhLmJ0biB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7IFxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tYmx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM0ZWExO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0LmlucHV0LW5hbWUge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcucHJldmlldy1nZW5lcmF0ZWQtaW1hZ2Uge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9IZWFkPlxuICAgICAgIDxib2R5IGNsYXNzTmFtZT1cImN1c3RvbV9jbGFzc1wiPlxuICAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tVmFsdWV9XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICA8L2JvZHk+XG4gICAgIDwvaHRtbD5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErRUE7QUEvRUE7QUErRUE7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7Ozs7QUEzRkE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFKQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==