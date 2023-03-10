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
    d: "M19.98 17.15A8.909 8.909 0 0 0 21 13c-1.5 0-2.91.37-4.15 1.02l3.13 3.13zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9zm9-7.5A2.5 2.5 0 0 1 14.5 8c0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.01-.2a2.5 2.5 0 0 0-5 0l.02.19a2.485 2.485 0 0 0-2.93.08l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.81 2.81 1.39 4.22l4.64 4.64c-.27.4-.43.87-.43 1.39a2.5 2.5 0 0 0 2.5 2.5c.52 0 .99-.16 1.4-.43l.02.02-.02.16A2.5 2.5 0 0 0 12 15c.05 0 .1-.01.16-.02l1.64 1.64A8.905 8.905 0 0 0 12 22c2.02 0 3.88-.67 5.38-1.8l2.4 2.4 1.41-1.41L2.81 2.81z"
  }));
});
exports.MacroOff = MacroOff;
MacroOff.displayName = 'MacroOff';
var MacroOffDimensions = {
  height: 24,
  width: 24
};
exports.MacroOffDimensions = MacroOffDimensions;