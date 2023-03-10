"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CookieDimensions = exports.Cookie = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Cookie = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10.5,
    cy: 8.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8.5,
    cy: 13.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 15,
    r: 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.11.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.02.42 2.54 2.44 4.56 4.99 4.94.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20z"
  }));
});
exports.Cookie = Cookie;
Cookie.displayName = 'Cookie';
var CookieDimensions = {
  height: 24,
  width: 24
};
exports.CookieDimensions = CookieDimensions;