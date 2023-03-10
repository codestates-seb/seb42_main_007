"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindReplaceDimensions = exports.FindReplace = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FindReplace = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 6c1.38 0 2.63.56 3.54 1.46l-1.69 1.69a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5V5.21c0-.45-.54-.67-.85-.35l-1.2 1.2A6.943 6.943 0 0 0 11 4C7.96 4 5.38 5.94 4.42 8.64c-.24.66.23 1.36.93 1.36.42 0 .79-.26.93-.66A5.007 5.007 0 0 1 11 6zm5.64 9.14c.4-.54.72-1.15.95-1.8.23-.65-.25-1.34-.94-1.34a.98.98 0 0 0-.93.66A5.007 5.007 0 0 1 11 16c-1.38 0-2.63-.56-3.54-1.46l1.69-1.69a.5.5 0 0 0-.36-.85H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.2-1.2a6.984 6.984 0 0 0 9.09.7l4.11 4.11c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49l-4.1-4.12z"
  }));
});
exports.FindReplace = FindReplace;
FindReplace.displayName = 'FindReplace';
var FindReplaceDimensions = {
  height: 24,
  width: 24
};
exports.FindReplaceDimensions = FindReplaceDimensions;