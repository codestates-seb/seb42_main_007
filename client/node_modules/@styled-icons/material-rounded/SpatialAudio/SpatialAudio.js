"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpatialAudioDimensions = exports.SpatialAudio = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SpatialAudio = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22.11 7.95c-1.89-.23-5.57-1.83-6.09-6.09a.976.976 0 0 0-.98-.86c-.6 0-1.07.53-1 1.13.31 2.43 2.38 7.12 7.8 7.8.6.08 1.13-.4 1.13-1 0-.5-.37-.92-.86-.98zm-.4-2.12a1 1 0 0 0 1.26-.97c0-.47-.34-.85-.79-.97-.49-.14-1.72-.68-2.11-2.13-.12-.44-.5-.76-.96-.76h-.01c-.66 0-1.14.64-.96 1.28.6 2.22 2.44 3.25 3.57 3.55z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 9,
    r: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"
  }));
});
exports.SpatialAudio = SpatialAudio;
SpatialAudio.displayName = 'SpatialAudio';
var SpatialAudioDimensions = {
  height: 24,
  width: 24
};
exports.SpatialAudioDimensions = SpatialAudioDimensions;