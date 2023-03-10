"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate90DegreesCwDimensions = exports.Rotate90DegreesCw = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Rotate90DegreesCw = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3.86 18.46c2.65 3.45 7.11 4.37 10.74 2.79.61-.27.74-1.09.27-1.56l-.05-.05c-.29-.29-.72-.35-1.1-.19-2.96 1.24-6.59.37-8.58-2.62-1.58-2.37-1.55-5.37.05-7.73C6.6 7.03 8.8 6.03 11 6.03v1.76c0 .45.54.67.86.36l2.79-2.79c.2-.2.2-.51 0-.71l-2.8-2.79a.495.495 0 0 0-.85.35v1.8c-2.76 0-5.52 1.25-7.34 3.78-2.28 3.17-2.2 7.58.2 10.67z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.7 7.71a.996.996 0 0 0-1.41 0l-4.59 4.58a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L17.7 7.71z"
  }));
});
exports.Rotate90DegreesCw = Rotate90DegreesCw;
Rotate90DegreesCw.displayName = 'Rotate90DegreesCw';
var Rotate90DegreesCwDimensions = {
  height: 24,
  width: 24
};
exports.Rotate90DegreesCwDimensions = Rotate90DegreesCwDimensions;