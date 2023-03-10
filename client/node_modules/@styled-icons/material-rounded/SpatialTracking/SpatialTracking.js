"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpatialTrackingDimensions = exports.SpatialTracking = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SpatialTracking = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    cx: 10,
    cy: 9,
    r: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3-13.8c-.43-.43-1.14-.39-1.51.09-1.5 1.93-3.35 6.72 0 11.03.37.48 1.08.52 1.5.09.35-.35.39-.91.09-1.3-1.17-1.5-2.64-5.23 0-8.61a.98.98 0 0 0-.08-1.3zm3.01 4.1c.23-.4.19-.9-.14-1.22-.47-.48-1.26-.37-1.59.21-1.15 2-.57 4.03.01 5.04.33.57 1.11.67 1.58.21.33-.33.36-.84.13-1.25-.25-.44-.74-1.69.01-2.99z"
  }));
});
exports.SpatialTracking = SpatialTracking;
SpatialTracking.displayName = 'SpatialTracking';
var SpatialTrackingDimensions = {
  height: 24,
  width: 24
};
exports.SpatialTrackingDimensions = SpatialTrackingDimensions;