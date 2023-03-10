"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubtitlesOffDimensions = exports.SubtitlesOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SubtitlesOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 4H6.83l8 8H19c.55 0 1 .45 1 1s-.45 1-1 1h-2.17l4.93 4.93c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2zm0 16-6-6-1.71-1.71L12 12 3.16 3.16a.996.996 0 1 0-1.41 1.41l.49.49c-.15.29-.24.6-.24.94v12c0 1.1.9 2 2 2h13.17l2.25 2.25a.996.996 0 1 0 1.41-1.41L20 20zM8 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1zm6 4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.08 0 .14.03.21.04l.74.74c.02.08.05.14.05.22z"
  }));
});
exports.SubtitlesOff = SubtitlesOff;
SubtitlesOff.displayName = 'SubtitlesOff';
var SubtitlesOffDimensions = {
  height: 24,
  width: 24
};
exports.SubtitlesOffDimensions = SubtitlesOffDimensions;