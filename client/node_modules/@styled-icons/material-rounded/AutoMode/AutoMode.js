"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoModeDimensions = exports.AutoMode = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AutoMode = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.06 2.83c-1.15-.77-2.46-1.32-3.86-1.61-.62-.12-1.2.35-1.2.99 0 .46.31.88.76.97 1.17.23 2.26.7 3.21 1.34.39.26.9.19 1.23-.14.46-.45.39-1.2-.14-1.55zM11 2.21c0-.64-.58-1.11-1.2-.99-1.4.29-2.71.84-3.86 1.61-.52.35-.59 1.1-.15 1.54.33.33.84.4 1.23.14.96-.64 2.04-1.1 3.21-1.34.46-.08.77-.5.77-.96zM4.38 5.79a1 1 0 0 0-1.54.15A10.66 10.66 0 0 0 1.23 9.8a1 1 0 0 0 .98 1.2c.46 0 .88-.31.97-.76.23-1.17.7-2.26 1.34-3.22.25-.38.18-.9-.14-1.23zM21.79 11a1 1 0 0 0 .98-1.2c-.29-1.4-.84-2.7-1.61-3.86-.35-.52-1.1-.6-1.54-.15-.33.33-.4.84-.14 1.23.64.96 1.1 2.05 1.34 3.22.09.45.51.76.97.76zM8 12.46l2.44 1.11 1.1 2.43a.5.5 0 0 0 .91 0l1.11-2.44 2.44-1.1a.5.5 0 0 0 0-.91l-2.44-1.11L12.46 8a.5.5 0 0 0-.91 0l-1.11 2.44L8 11.54c-.39.18-.39.74 0 .92z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21a8.96 8.96 0 0 1-7.46-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.7c1.99 2.84 5.27 4.7 9 4.7 4.45 0 8.27-2.64 10-6.43a1.01 1.01 0 0 0-.69-1.39c-.45-.1-.93.11-1.12.54C18.77 18.83 15.64 21 12 21z"
  }));
});
exports.AutoMode = AutoMode;
AutoMode.displayName = 'AutoMode';
var AutoModeDimensions = {
  height: 24,
  width: 24
};
exports.AutoModeDimensions = AutoModeDimensions;