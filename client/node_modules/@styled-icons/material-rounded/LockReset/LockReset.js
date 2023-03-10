"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockResetDimensions = exports.LockReset = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var LockReset = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M13.26 3A9.003 9.003 0 0 0 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.8-2.79c.3-.31.08-.85-.37-.85H6c0-3.89 3.2-7.06 7.1-7 3.71.05 6.84 3.18 6.9 6.9.06 3.91-3.1 7.1-7 7.1-1.59 0-3.05-.53-4.23-1.43-.4-.3-.96-.27-1.31.09-.43.43-.39 1.14.09 1.5A8.971 8.971 0 0 0 13 21c5.06 0 9.14-4.17 9-9.25-.13-4.7-4.05-8.62-8.74-8.75zM15 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"
  }));
});
exports.LockReset = LockReset;
LockReset.displayName = 'LockReset';
var LockResetDimensions = {
  height: 24,
  width: 24
};
exports.LockResetDimensions = LockResetDimensions;