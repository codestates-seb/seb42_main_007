"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirlineStopsDimensions = exports.AirlineStops = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirlineStops = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15 18c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h1c-.47-4.21-3.89-7.55-8.12-7.96A.98.98 0 0 1 2 8.05c0-.59.52-1.06 1.11-1 3.92.39 7.26 2.82 8.89 6.25 1.13-2.43 2.99-4.25 4.78-5.52l-1.92-1.92c-.32-.32-.1-.86.35-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 9.2c-2.28 1.58-4.76 4.1-5.21 7.8h1c.55 0 1 .45 1 1z"
  }));
});
exports.AirlineStops = AirlineStops;
AirlineStops.displayName = 'AirlineStops';
var AirlineStopsDimensions = {
  height: 24,
  width: 24
};
exports.AirlineStopsDimensions = AirlineStopsDimensions;