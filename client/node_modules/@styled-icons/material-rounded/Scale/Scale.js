"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScaleDimensions = exports.Scale = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Scale = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16 21c0 .55.45 1 1 1h3.43c.87 0 1.58-.75 1.5-1.62-.59-6.2-4.53-8.7-7.93-9.38V8c3.31-.42 6.03-1.86 7.27-3.73.65-.97-.12-2.27-1.29-2.27H4.02C2.85 2 2.08 3.3 2.73 4.27 3.97 6.14 6.69 7.58 10 8v3c-3.4.68-7.34 3.18-7.93 9.38-.08.87.63 1.62 1.5 1.62H7c.55 0 1-.45 1-1s-.45-1-1-1H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H17c-.55 0-1 .45-1 1zm-4.5.94c-.7-.17-1.27-.74-1.44-1.44-.18-.74.06-1.44.53-1.91.55-.55 2.91-1.57 4.33-2.15.41-.17.82.24.65.65-.58 1.42-1.6 3.78-2.15 4.33-.47.46-1.17.7-1.92.52z"
  }));
});
exports.Scale = Scale;
Scale.displayName = 'Scale';
var ScaleDimensions = {
  height: 24,
  width: 24
};
exports.ScaleDimensions = ScaleDimensions;