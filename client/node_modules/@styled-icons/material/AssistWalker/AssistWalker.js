"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssistWalkerDimensions = exports.AssistWalker = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AssistWalker = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.5,
    cy: 4.5,
    r: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.77 17.72-.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59L4.08 9.91c-.53.68-.51 1.57-.21 2.13l1.43 2.8-3.15 4.05 1.57 1.24L7.4 15.4l-.17-1.36.77.71V20h2v-6.12l-2.12-2.12 2.36-2.36c.94.94 1.72 1.82 3.59 2.32L13 20h1.5l.41-3.5h3.18l.14 1.22c-.44.26-.73.74-.73 1.28 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.54-.29-1.02-.73-1.28zM15.09 15l.41-3.5h2l.41 3.5h-2.82z"
  }));
});
exports.AssistWalker = AssistWalker;
AssistWalker.displayName = 'AssistWalker';
var AssistWalkerDimensions = {
  height: 24,
  width: 24
};
exports.AssistWalkerDimensions = AssistWalkerDimensions;