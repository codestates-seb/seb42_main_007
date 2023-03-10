"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WbAutoDimensions = exports.WbAuto = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WbAuto = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.85 12.65h2.3L8 9zM22.72 7c-.42 0-.77.3-.85.7l-1.07 5.59-1.31-5.51c-.11-.46-.52-.78-.99-.78s-.88.32-.98.78l-1.31 5.51-1.07-5.59c-.08-.4-.44-.7-.85-.7-.01 0-.03.01-.04.01A7.998 7.998 0 0 0 0 12c0 4.42 3.58 8 8 8 3.17 0 5.9-1.85 7.2-4.52a1.104 1.104 0 0 0 2.01-.32L18.5 9.9l1.29 5.26c.12.49.57.84 1.07.84.52 0 .96-.36 1.08-.86l1.61-7.08A.859.859 0 0 0 22.72 7zm-11.79 9c-.38 0-.72-.24-.84-.6L9.6 14H6.4l-.49 1.4c-.13.36-.46.6-.84.6a.888.888 0 0 1-.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7s1.13.38 1.34.94l2.44 6.86c.2.59-.23 1.2-.85 1.2z"
  }));
});
exports.WbAuto = WbAuto;
WbAuto.displayName = 'WbAuto';
var WbAutoDimensions = {
  height: 24,
  width: 24
};
exports.WbAutoDimensions = WbAutoDimensions;