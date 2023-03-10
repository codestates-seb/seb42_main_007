"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenRotationDimensions = exports.ScreenRotation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScreenRotation = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.23 1.75a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm3.89 18.73L3.52 9.88a.996.996 0 0 1 0-1.41l4.95-4.95a.996.996 0 0 1 1.41 0l10.61 10.61c.39.39.39 1.02 0 1.41l-4.95 4.95c-.39.38-1.03.38-1.42-.01zM17.61 1.4C16.04.57 14.06-.03 11.81.02c-.18 0-.26.22-.14.35l3.48 3.48 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74zM8.85 20.16l-1.33 1.33a10.504 10.504 0 0 1-5.89-7.86.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.57.83 3.55 1.43 5.8 1.38.18 0 .26-.22.14-.35l-3.48-3.49z"
  }));
});
exports.ScreenRotation = ScreenRotation;
ScreenRotation.displayName = 'ScreenRotation';
var ScreenRotationDimensions = {
  height: 24,
  width: 24
};
exports.ScreenRotationDimensions = ScreenRotationDimensions;