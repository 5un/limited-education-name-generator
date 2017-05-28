'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

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

var _reactHelmet = require('react-helmet');

var _lodash = require('lodash');

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