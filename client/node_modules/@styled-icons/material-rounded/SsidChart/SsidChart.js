"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SsidChartDimensions = exports.SsidChart = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SsidChart = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3 9.03a1 1 0 0 1 .41-.81L7.14 5.5c.4-.29.95-.25 1.3.1l3.78 3.78 7.2-5.23c.65-.48 1.58-.01 1.58.81a1 1 0 0 1-.41.81l-7.9 5.73c-.4.29-.95.25-1.29-.1L7.62 7.62 4.59 9.84c-.66.48-1.59.01-1.59-.81zM21 16c0-.55-.45-1-1-1h-3.35c-.23 0-.45.08-.62.22l-3.9 3.12-5.53-5.35a.987.987 0 0 0-1.27-.1l-1.9 1.35c-.27.19-.43.5-.43.82 0 .81.92 1.29 1.58.81L5.8 15l5.57 5.39c.36.35.93.38 1.32.06L17 17h3c.55 0 1-.45 1-1z"
  }));
});
exports.SsidChart = SsidChart;
SsidChart.displayName = 'SsidChart';
var SsidChartDimensions = {
  height: 24,
  width: 24
};
exports.SsidChartDimensions = SsidChartDimensions;