"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeUpDimensions = exports.SwipeUp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SwipeUp = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m20.22 10-4.15.01a.975.975 0 0 0-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34zM2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94a10.457 10.457 0 0 0 1.88 8.99L6.13 14A11.974 11.974 0 0 1 3.5 6.5c0-.92.1-1.82.3-2.68L2.06 5.56z"
  }));
});
exports.SwipeUp = SwipeUp;
SwipeUp.displayName = 'SwipeUp';
var SwipeUpDimensions = {
  height: 24,
  width: 24
};
exports.SwipeUpDimensions = SwipeUpDimensions;