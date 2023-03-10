"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SatelliteAltDimensions = exports.SatelliteAlt = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SatelliteAlt = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21 14h2a9 9 0 0 1-9 9v-2c3.87 0 7-3.13 7-7zm-7 3v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3zM18.26.59l3.54 3.54c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0L14.55 8.9l-.71.7 1.24 1.24c.78.78.78 2.05 0 2.83l-1.41 1.41c-.78.78-2.05.78-2.83 0L9.6 13.84l-.71.71 1.24 1.24c.78.78.78 2.05 0 2.83L6.95 21.8c-.78.78-2.05.78-2.83 0L.58 18.26c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.24-1.23c-.78-.78-.78-2.05 0-2.83L8.72 7.3c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.25-1.23c-.78-.78-.78-2.05 0-2.83L15.43.59c.79-.79 2.05-.79 2.83 0zm-15.2 15.2L2 16.85l3.54 3.54 1.06-1.06-3.54-3.54zm2.12-2.12-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm4.95-4.95-1.41 1.41 3.54 3.54 1.41-1.41-3.54-3.54zm4.6-4.6-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zM16.85 2l-1.06 1.06 3.54 3.54 1.06-1.06L16.85 2z"
  }));
});
exports.SatelliteAlt = SatelliteAlt;
SatelliteAlt.displayName = 'SatelliteAlt';
var SatelliteAltDimensions = {
  height: 24,
  width: 24
};
exports.SatelliteAltDimensions = SatelliteAltDimensions;