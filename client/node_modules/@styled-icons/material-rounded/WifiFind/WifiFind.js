"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WifiFindDimensions = exports.WifiFind = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WifiFind = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 14c0-3.36 2.64-6 6-6 2.2 0 4.08 1.13 5.13 2.86l.36-.37c.86-.86.76-2.27-.2-3.01A16.887 16.887 0 0 0 12 4C8.13 4 4.56 5.3 1.71 7.48c-.96.74-1.06 2.15-.2 3.01l9.08 9.09c.78.78 2.05.78 2.83 0l.45-.45C12.14 18.09 11 16.2 11 14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.44 16.03c.35-.59.56-1.28.56-2.03 0-2.24-1.76-4-4-4s-4 1.76-4 4 1.76 4 4 4c.75 0 1.44-.21 2.03-.56l1.85 1.85a.996.996 0 1 0 1.41-1.41l-1.85-1.85zM17 16c-1.12 0-2-.88-2-2s.88-2 2-2 2 .88 2 2-.88 2-2 2z"
  }));
});
exports.WifiFind = WifiFind;
WifiFind.displayName = 'WifiFind';
var WifiFindDimensions = {
  height: 24,
  width: 24
};
exports.WifiFindDimensions = WifiFindDimensions;