"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinchDimensions = exports.Pinch = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Pinch = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.2 17.43c0-.65.6-1.13 1.24-.99l3.56.8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29a.976.976 0 0 1-.28-.69zM9.5 5.25c0 .41.34.75.75.75s.75-.34.75-.75V2c0-.55-.45-1-1-1H6.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.69L2.5 8.44V6.75c0-.41-.34-.75-.75-.75S1 6.34 1 6.75V10c0 .55.45 1 1 1h3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H3.56L9.5 3.56v1.69z"
  }));
});
exports.Pinch = Pinch;
Pinch.displayName = 'Pinch';
var PinchDimensions = {
  height: 24,
  width: 24
};
exports.PinchDimensions = PinchDimensions;