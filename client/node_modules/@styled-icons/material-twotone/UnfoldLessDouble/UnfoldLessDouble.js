"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnfoldLessDoubleDimensions = exports.UnfoldLessDouble = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var UnfoldLessDouble = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z"
  }));
});
exports.UnfoldLessDouble = UnfoldLessDouble;
UnfoldLessDouble.displayName = 'UnfoldLessDouble';
var UnfoldLessDoubleDimensions = {
  height: 24,
  width: 24
};
exports.UnfoldLessDoubleDimensions = UnfoldLessDoubleDimensions;