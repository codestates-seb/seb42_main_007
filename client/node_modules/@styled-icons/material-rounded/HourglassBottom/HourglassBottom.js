"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HourglassBottomDimensions = exports.HourglassBottom = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HourglassBottom = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16 22c1.1 0 2-.9 2-2l-.01-3.18c0-.53-.21-1.03-.58-1.41L14 12l3.41-3.43c.37-.37.58-.88.58-1.41L18 4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3.16c0 .53.21 1.04.58 1.42L10 12l-3.41 3.4c-.38.38-.59.89-.59 1.42V20c0 1.1.9 2 2 2h8zM8 7.09V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.09c0 .27-.11.52-.29.71L12 11.5 8.29 7.79c-.18-.18-.29-.44-.29-.7z"
  }));
});
exports.HourglassBottom = HourglassBottom;
HourglassBottom.displayName = 'HourglassBottom';
var HourglassBottomDimensions = {
  height: 24,
  width: 24
};
exports.HourglassBottomDimensions = HourglassBottomDimensions;