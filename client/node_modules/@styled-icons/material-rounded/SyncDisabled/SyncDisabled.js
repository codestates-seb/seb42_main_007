"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncDisabledDimensions = exports.SyncDisabled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SyncDisabled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10 5.74v-.19c0-.68-.71-1.11-1.32-.82-.19.09-.36.2-.54.3L9.6 6.49c.24-.18.4-.45.4-.75zM20 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51a.5.5 0 0 0-.36-.85H14v4.79c0 .45.54.67.85.35l1.39-1.39C17.32 8.85 18 10.34 18 12c0 .85-.18 1.66-.5 2.39l1.48 1.48A7.92 7.92 0 0 0 20 12zM3.57 4.7a.996.996 0 0 0 0 1.41l1.65 1.65A7.986 7.986 0 0 0 4 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51a.5.5 0 0 0 .36.85H9.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C6.68 15.15 6 13.66 6 12c0-1 .26-1.93.69-2.76l8.07 8.07c-.01.02-.01.02-.01.04-.43.12-.75.48-.75.91v.18c0 .68.71 1.11 1.32.82.31-.14.61-.31.9-.49l1.87 1.87a.996.996 0 1 0 1.41-1.41L4.98 4.7a.996.996 0 0 0-1.41 0z"
  }));
});
exports.SyncDisabled = SyncDisabled;
SyncDisabled.displayName = 'SyncDisabled';
var SyncDisabledDimensions = {
  height: 24,
  width: 24
};
exports.SyncDisabledDimensions = SyncDisabledDimensions;