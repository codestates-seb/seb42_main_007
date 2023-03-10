"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate90DegreesCcwDimensions = exports.Rotate90DegreesCcw = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Rotate90DegreesCcw = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m5.93 7.83-3.65 3.66c-.78.78-.78 2.05 0 2.83l3.66 3.66c.78.78 2.05.78 2.83 0l3.66-3.65c.78-.78.78-2.05 0-2.83L8.76 7.82c-.79-.78-2.05-.78-2.83.01zM4.4 12.19l2.25-2.25c.39-.39 1.02-.39 1.42 0l2.24 2.24c.39.39.39 1.02 0 1.41l-2.25 2.25c-.39.39-1.02.39-1.42 0L4.4 13.61c-.39-.39-.39-1.03 0-1.42zm14.96-5.55A8.95 8.95 0 0 0 13 4v-.83c0-.89-1.08-1.34-1.71-.71L9.47 4.29a.996.996 0 0 0 0 1.41l1.83 1.83c.62.63 1.7.19 1.7-.7V6c2.02 0 4.03.86 5.45 2.61 2.05 2.52 2.05 6.27 0 8.79a6.985 6.985 0 0 1-7.74 2.21.998.998 0 0 0-1.02.26c-.5.5-.34 1.39.34 1.62a8.95 8.95 0 0 0 9.33-2.13 8.98 8.98 0 0 0 0-12.72z"
  }));
});
exports.Rotate90DegreesCcw = Rotate90DegreesCcw;
Rotate90DegreesCcw.displayName = 'Rotate90DegreesCcw';
var Rotate90DegreesCcwDimensions = {
  height: 24,
  width: 24
};
exports.Rotate90DegreesCcwDimensions = Rotate90DegreesCcwDimensions;