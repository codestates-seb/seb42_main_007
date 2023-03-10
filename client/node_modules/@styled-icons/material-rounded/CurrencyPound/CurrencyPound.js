"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyPoundDimensions = exports.CurrencyPound = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CurrencyPound = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(_styledIcon.StyledIconBase, (0, _extends2.default)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.21 17.61c-.47-.24-1.03-.05-1.31.4-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.2 0 2.26.61 2.89 1.53.27.4.77.59 1.22.4.6-.25.8-.99.43-1.53A5.497 5.497 0 0 0 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1 0 1.9-1.29 3.11-2.06 3.66-.34.24-.54.63-.54 1.05 0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2 .28-.51.09-1.14-.42-1.39z"
  }));
});
exports.CurrencyPound = CurrencyPound;
CurrencyPound.displayName = 'CurrencyPound';
var CurrencyPoundDimensions = {
  height: 24,
  width: 24
};
exports.CurrencyPoundDimensions = CurrencyPoundDimensions;