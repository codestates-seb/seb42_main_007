"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmergencyShareDimensions = exports.EmergencyShare = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EmergencyShare = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.022 5.022 0 0 0-7.08 0L7.05 6.05A6.976 6.976 0 0 1 12 4zm7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23zM12 11c1.94 0 4 1.45 4 4.15 0 .94-.55 2.93-4 6.17-3.45-3.24-4-5.23-4-6.17 0-2.7 2.06-4.15 4-4.15zm0-2c-3.15 0-6 2.41-6 6.15 0 2.49 2 5.44 6 8.85 4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm1.5 6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"
  }));
});
exports.EmergencyShare = EmergencyShare;
EmergencyShare.displayName = 'EmergencyShare';
var EmergencyShareDimensions = {
  height: 24,
  width: 24
};
exports.EmergencyShareDimensions = EmergencyShareDimensions;