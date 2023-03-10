"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomInMapDimensions = exports.ZoomInMap = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ZoomInMap = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 1 0-1.41 1.41L5.59 7H4c-.55 0-1 .45-1 1zm17-1h-1.59l2.38-2.38a.996.996 0 1 0-1.41-1.41L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM4 17h1.59l-2.38 2.38a.996.996 0 1 0 1.41 1.41L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38a.996.996 0 1 0 1.41-1.41L18.41 17H20c.55 0 1-.45 1-1z"
  }));
});
exports.ZoomInMap = ZoomInMap;
ZoomInMap.displayName = 'ZoomInMap';
var ZoomInMapDimensions = {
  height: 24,
  width: 24
};
exports.ZoomInMapDimensions = ZoomInMapDimensions;