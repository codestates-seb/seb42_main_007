"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SolarPowerDimensions = exports.SolarPower = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SolarPower = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3.33 16H11v-3H5.6c-.94 0-1.75.65-1.95 1.57L3.33 16zM13 16h7.67l-.32-1.43A2.007 2.007 0 0 0 18.4 13H13v3zm8.11 2H13v4h6.51c1.28 0 2.23-1.18 1.95-2.43L21.11 18zM4.49 22H11v-4H2.89l-.35 1.57C2.26 20.82 3.21 22 4.49 22zM12 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zm6.59.62a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41l.71.71c.39.39 1.02.39 1.41 0zm-11.77 0 .71-.71A.996.996 0 1 0 6.12 6.5l-.71.7a.996.996 0 0 0 0 1.41c.39.4 1.02.4 1.41.01zM5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm15 0h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-8 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"
  }));
});
exports.SolarPower = SolarPower;
SolarPower.displayName = 'SolarPower';
var SolarPowerDimensions = {
  height: 24,
  width: 24
};
exports.SolarPowerDimensions = SolarPowerDimensions;