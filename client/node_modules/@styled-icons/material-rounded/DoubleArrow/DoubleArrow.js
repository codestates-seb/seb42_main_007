"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleArrowDimensions = exports.DoubleArrow = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DoubleArrow = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m20.08 11.42-4.04-5.65c-.34-.48-.89-.77-1.48-.77-1.49 0-2.35 1.68-1.49 2.89L16 12l-2.93 4.11c-.87 1.21 0 2.89 1.49 2.89.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.08 11.42 9.05 5.77C8.7 5.29 8.15 5 7.56 5 6.07 5 5.2 6.68 6.07 7.89L9 12l-2.93 4.11C5.2 17.32 6.07 19 7.56 19c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16z"
  }));
});
exports.DoubleArrow = DoubleArrow;
DoubleArrow.displayName = 'DoubleArrow';
var DoubleArrowDimensions = {
  height: 24,
  width: 24
};
exports.DoubleArrowDimensions = DoubleArrowDimensions;