"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisabledVisibleDimensions = exports.DisabledVisible = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DisabledVisible = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17 15c1.95 0 3.76.98 4.75 2.5-.99 1.52-2.8 2.5-4.75 2.5s-3.76-.98-4.75-2.5c.99-1.52 2.8-2.5 4.75-2.5zm0-2c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 6c-.83 0-1.5-.67-1.5-1.5S16.17 16 17 16s1.5.67 1.5 1.5S17.83 19 17 19zm4.99-6.66c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89z"
  }));
});
exports.DisabledVisible = DisabledVisible;
DisabledVisible.displayName = 'DisabledVisible';
var DisabledVisibleDimensions = {
  height: 24,
  width: 24
};
exports.DisabledVisibleDimensions = DisabledVisibleDimensions;