"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsychologyAltDimensions = exports.PsychologyAlt = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PsychologyAlt = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.68a7.016 7.016 0 0 0 3.94-7.26zM12.5 14c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74zm1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8z"
  }));
});
exports.PsychologyAlt = PsychologyAlt;
PsychologyAlt.displayName = 'PsychologyAlt';
var PsychologyAltDimensions = {
  height: 24,
  width: 24
};
exports.PsychologyAltDimensions = PsychologyAltDimensions;