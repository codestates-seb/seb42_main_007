"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StadiumDimensions = exports.Stadium = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Stadium = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.11 5.45 3.72 6.64A.502.502 0 0 1 3 6.19V3.81c0-.37.39-.61.72-.45L6.1 4.55c.37.19.37.71.01.9zM18 3.81v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-7-1v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19a.494.494 0 0 0-.72.44zm-6 7.23c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM14 17h-4c-.55 0-1 .45-1 1v3.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V18c0-.55-.45-1-1-1z"
  }));
});
exports.Stadium = Stadium;
Stadium.displayName = 'Stadium';
var StadiumDimensions = {
  height: 24,
  width: 24
};
exports.StadiumDimensions = StadiumDimensions;