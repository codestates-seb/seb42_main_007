"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PowerOffDimensions = exports.PowerOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PowerOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 13.66V8.99c0-1-1.01-2-2-1.99V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.88l7.63 7.63c.15-.3.25-.63.25-.97zM10 4c0-.55-.45-1-1-1s-1 .45-1 1v.88l2 2V4zm10.15 15.86-7.66-7.66-5.1-5.1-2.56-2.56a.996.996 0 1 0-1.41 1.41l2.63 2.63c-.03.13-.05.27-.05.41v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l.48-.48 3.76 3.76c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42z"
  }));
});
exports.PowerOff = PowerOff;
PowerOff.displayName = 'PowerOff';
var PowerOffDimensions = {
  height: 24,
  width: 24
};
exports.PowerOffDimensions = PowerOffDimensions;