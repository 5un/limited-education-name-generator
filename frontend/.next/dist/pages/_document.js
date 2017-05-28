'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

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