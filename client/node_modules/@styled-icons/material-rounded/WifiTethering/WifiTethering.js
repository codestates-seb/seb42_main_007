"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WifiTetheringDimensions = exports.WifiTethering = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WifiTethering = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2a6 6 0 0 0-6.75-5.95c-2.62.32-4.78 2.41-5.18 5.02-.33 2.15.49 4.11 1.93 5.4.48.43 1.23.33 1.56-.23l.01-.01c.24-.42.14-.93-.22-1.26a3.997 3.997 0 0 1-1.22-3.94 3.954 3.954 0 0 1 2.9-2.91A3.999 3.999 0 0 1 16 13c0 1.18-.52 2.23-1.33 2.96-.36.32-.47.84-.23 1.26l.01.01c.31.53 1.03.69 1.5.28A5.996 5.996 0 0 0 18 13zm-7.17-9.93c-4.62.52-8.35 4.33-8.78 8.96a9.966 9.966 0 0 0 4.02 9.01c.48.35 1.16.2 1.46-.31.25-.43.14-.99-.26-1.29-2.28-1.69-3.65-4.55-3.16-7.7.54-3.5 3.46-6.29 6.98-6.68C15.91 4.51 20 8.28 20 13c0 2.65-1.29 4.98-3.27 6.44-.4.3-.51.85-.26 1.29.3.52.98.66 1.46.31A9.96 9.96 0 0 0 22 13c0-5.91-5.13-10.62-11.17-9.93z"
  }));
});
exports.WifiTethering = WifiTethering;
WifiTethering.displayName = 'WifiTethering';
var WifiTetheringDimensions = {
  height: 24,
  width: 24
};
exports.WifiTetheringDimensions = WifiTetheringDimensions;