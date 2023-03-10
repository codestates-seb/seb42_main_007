"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolcanoDimensions = exports.Volcano = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Volcano = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16.49 8h-4.14c-.82 0-1.55.5-1.86 1.26L9 13H7.3c-.79 0-1.51.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10A1.992 1.992 0 0 0 16.49 8zM14 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1zm5.66 2.34a.996.996 0 0 0-1.41 0l-1.41 1.41a.996.996 0 1 0 1.41 1.41l1.41-1.41a.996.996 0 0 0 0-1.41zm-8.49 1.42L9.76 3.34a.996.996 0 1 0-1.41 1.41l1.41 1.41c.39.39 1.02.39 1.41 0a.984.984 0 0 0 0-1.4z"
  }));
});
exports.Volcano = Volcano;
Volcano.displayName = 'Volcano';
var VolcanoDimensions = {
  height: 24,
  width: 24
};
exports.VolcanoDimensions = VolcanoDimensions;