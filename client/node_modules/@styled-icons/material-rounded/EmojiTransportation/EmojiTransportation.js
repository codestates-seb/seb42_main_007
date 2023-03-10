"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiTransportationDimensions = exports.EmojiTransportation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EmojiTransportation = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m21.99 14.77-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01l-.01-5.24zm-10.38-1.43.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66zm.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z"
  }));
});
exports.EmojiTransportation = EmojiTransportation;
EmojiTransportation.displayName = 'EmojiTransportation';
var EmojiTransportationDimensions = {
  height: 24,
  width: 24
};
exports.EmojiTransportationDimensions = EmojiTransportationDimensions;