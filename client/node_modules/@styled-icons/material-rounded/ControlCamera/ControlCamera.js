"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlCameraDimensions = exports.ControlCamera = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ControlCamera = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.65 9.35 2.7 11.3a.996.996 0 0 0 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0zm12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95a.996.996 0 0 0 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01zM12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0a1.25 1.25 0 0 0 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0l-.9.88zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65a1.25 1.25 0 0 0 0 1.77z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 3
  }));
});
exports.ControlCamera = ControlCamera;
ControlCamera.displayName = 'ControlCamera';
var ControlCameraDimensions = {
  height: 24,
  width: 24
};
exports.ControlCameraDimensions = ControlCameraDimensions;