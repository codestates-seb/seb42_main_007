"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyExchangeDimensions = exports.CurrencyExchange = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CurrencyExchange = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 23c5.7 0 10.39-4.34 10.95-9.9.06-.59-.41-1.1-1-1.1-.51 0-.94.38-.99.88C20.52 17.44 16.67 21 12 21c-3.12 0-5.87-1.59-7.48-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.67C4.99 21.15 8.28 23 12 23zm0-22C6.3 1 1.61 5.34 1.05 10.9c-.05.59.41 1.1 1 1.1.51 0 .94-.38.99-.88C3.48 6.56 7.33 3 12 3c3.12 0 5.87 1.59 7.48 4H18c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.67A11.001 11.001 0 0 0 12 1zm-.88 4.88c0-.49.4-.88.88-.88s.88.39.88.88v.37c1.07.19 1.75.76 2.16 1.3.34.44.16 1.08-.36 1.3-.36.15-.78.03-1.02-.28-.28-.38-.78-.77-1.6-.77-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.62-2.5 3.13-3.02 3.22v.37c0 .48-.39.88-.88.88s-.88-.39-.88-.88v-.42c-.63-.15-1.93-.61-2.69-2.1-.23-.44.03-1.02.49-1.2.41-.16.9-.01 1.11.38.32.61.95 1.37 2.12 1.37.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96v-.37z"
  }));
});
exports.CurrencyExchange = CurrencyExchange;
CurrencyExchange.displayName = 'CurrencyExchange';
var CurrencyExchangeDimensions = {
  height: 24,
  width: 24
};
exports.CurrencyExchangeDimensions = CurrencyExchangeDimensions;