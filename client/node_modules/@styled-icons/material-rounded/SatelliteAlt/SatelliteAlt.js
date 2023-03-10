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
    d: "M20.95 14.88a6.985 6.985 0 0 1-6.07 6.07.995.995 0 0 0-.87 1.11c.07.55.57.94 1.12.87 4.09-.51 7.3-3.72 7.81-7.81.06-.55-.33-1.05-.88-1.11a.987.987 0 0 0-1.11.87zm-2.11.38a1 1 0 0 0-.72-1.22.996.996 0 0 0-1.22.72 3 3 0 0 1-2.15 2.15 1.003 1.003 0 0 0-.72 1.22c.14.53.69.85 1.22.72a5.018 5.018 0 0 0 3.59-3.59zM21.8 4.12 18.26.58c-.78-.78-2.05-.78-2.83 0l-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.24c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83zM5.54 20.38 2 16.85l1.06-1.06 3.54 3.54-1.06 1.05zm2.12-2.12-3.54-3.54 1.06-1.06 3.54 3.54-1.06 1.06zm9.54-9.54-3.54-3.54 1.06-1.06 3.54 3.54-1.06 1.06zm2.12-2.12-3.54-3.54L16.85 2l3.54 3.54-1.07 1.06z"
  }));
});
exports.SatelliteAlt = SatelliteAlt;
SatelliteAlt.displayName = 'SatelliteAlt';
var SatelliteAltDimensions = {
  height: 24,
  width: 24
};
exports.SatelliteAltDimensions = SatelliteAltDimensions;