"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyOffDimensions = exports.KeyOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var KeyOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m12.83 10 4.09 4.09L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a.999.999 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29h-7.76zm6.24 11.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L3.98 6.8A6.041 6.041 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l6.89 6.89zm-9.16-9.16A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3 0-1.4.97-2.58 2.26-2.91l3.65 3.65z"
  }));
});
exports.KeyOff = KeyOff;
KeyOff.displayName = 'KeyOff';
var KeyOffDimensions = {
  height: 24,
  width: 24
};
exports.KeyOffDimensions = KeyOffDimensions;