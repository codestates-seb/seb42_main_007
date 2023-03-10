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
    d: "M12 9c-3.15 0-6 2.41-6 6.15 0 2.35 1.78 5.11 5.34 8.27.37.33.95.33 1.33 0C16.22 20.25 18 17.5 18 15.15 18 11.41 15.15 9 12 9zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.18-9.68c-.35.35-.89.38-1.3.09C14.07 6.34 13.07 6 12 6s-2.07.34-2.88.91c-.41.28-.95.26-1.3-.09-.43-.43-.39-1.15.09-1.5C9.06 4.49 10.48 4 12 4s2.94.49 4.09 1.32c.49.35.52 1.07.09 1.5zM4.97 3.97c-.42-.43-.38-1.12.08-1.5C6.95.93 9.37 0 12.01 0c2.64 0 5.06.93 6.95 2.48.46.38.5 1.07.08 1.49-.36.36-.93.39-1.32.07a9.027 9.027 0 0 0-11.43 0c-.39.32-.96.28-1.32-.07z"
  }));
});
exports.EmergencyShare = EmergencyShare;
EmergencyShare.displayName = 'EmergencyShare';
var EmergencyShareDimensions = {
  height: 24,
  width: 24
};
exports.EmergencyShareDimensions = EmergencyShareDimensions;