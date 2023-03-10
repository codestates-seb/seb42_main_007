"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipCameraIosDimensions = exports.FlipCameraIos = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FlipCameraIos = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6.33 12.7c-.52.19-1.08.3-1.67.3-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4 .46 0 .91-.08 1.32-.23a.498.498 0 1 1 .35.93zm2.83-2.2L14 13h2c0-2.21-1.79-4-4-4-.46 0-.91.08-1.32.23a.498.498 0 1 1-.35-.93c.52-.19 1.08-.3 1.67-.3 2.76 0 5 2.24 5 5h2l-2.5 2.5z"
  }));
});
exports.FlipCameraIos = FlipCameraIos;
FlipCameraIos.displayName = 'FlipCameraIos';
var FlipCameraIosDimensions = {
  height: 24,
  width: 24
};
exports.FlipCameraIosDimensions = FlipCameraIosDimensions;