"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacroOffDimensions = exports.MacroOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MacroOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.2 13.08c-.64-.09-1.21.48-1.12 1.12C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92zM12 5.5A2.5 2.5 0 0 1 14.5 8c0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.01-.2a2.5 2.5 0 0 0-5 0l.02.19a2.485 2.485 0 0 0-2.93.08l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43zm7.98 11.65c.47-.91.8-1.9.94-2.95.09-.64-.48-1.21-1.12-1.12-1.05.14-2.05.47-2.95.94l3.13 3.13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.1 3.51a.996.996 0 0 0 0 1.41l3.93 3.93c-.35.52-.53 1.17-.38 1.89.22 1.13 1.26 1.98 2.41 2 .54.01 1.02-.15 1.44-.43l.02.02-.02.17A2.5 2.5 0 0 0 12 15c.05 0 .1-.01.16-.02l1.64 1.64A8.905 8.905 0 0 0 12 22c2.02 0 3.88-.67 5.38-1.79l1.69 1.69a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z"
  }));
});
exports.MacroOff = MacroOff;
MacroOff.displayName = 'MacroOff';
var MacroOffDimensions = {
  height: 24,
  width: 24
};
exports.MacroOffDimensions = MacroOffDimensions;