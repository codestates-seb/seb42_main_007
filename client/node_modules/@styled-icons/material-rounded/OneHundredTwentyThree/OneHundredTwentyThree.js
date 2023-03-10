"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneHundredTwentyThreeDimensions = exports.OneHundredTwentyThree = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var OneHundredTwentyThree = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.75 10.5c-.41 0-.75-.34-.75-.75S4.34 9 4.75 9H6c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-.75zm5-1.5c-.41 0-.75.34-.75.75s.34.75.75.75H12v1h-2c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1h2.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H9.75zm8.75 6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2.75c-.41 0-.75.34-.75.75s.34.75.75.75H18v1h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5H18v1h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.75z"
  }));
});
exports.OneHundredTwentyThree = OneHundredTwentyThree;
OneHundredTwentyThree.displayName = 'OneHundredTwentyThree';
var OneHundredTwentyThreeDimensions = {
  height: 24,
  width: 24
};
exports.OneHundredTwentyThreeDimensions = OneHundredTwentyThreeDimensions;