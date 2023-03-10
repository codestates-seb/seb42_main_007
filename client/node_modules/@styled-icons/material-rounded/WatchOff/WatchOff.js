"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatchOffDimensions = exports.WatchOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WatchOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 7c2.76 0 5 2.24 5 5 0 .64-.13 1.25-.35 1.82l1.5 1.5a6.963 6.963 0 0 0-1.79-8.79l-.93-3.1A2.004 2.004 0 0 0 13.51 2h-3.02c-.89 0-1.66.58-1.92 1.42l-.53 1.79 2.14 2.14C10.75 7.13 11.36 7 12 7zM2.1 3.51a.996.996 0 0 0 0 1.41l3.75 3.75C5.31 9.67 5 10.8 5 12c0 2.22 1.03 4.19 2.64 5.47l.93 3.1c.26.85 1.03 1.43 1.92 1.43h3.02c.88 0 1.66-.58 1.92-1.43l.53-1.78 3.11 3.11a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zM12 17c-2.76 0-5-2.24-5-5 0-.64.13-1.25.35-1.82l6.47 6.47c-.57.22-1.18.35-1.82.35z"
  }));
});
exports.WatchOff = WatchOff;
WatchOff.displayName = 'WatchOff';
var WatchOffDimensions = {
  height: 24,
  width: 24
};
exports.WatchOffDimensions = WatchOffDimensions;