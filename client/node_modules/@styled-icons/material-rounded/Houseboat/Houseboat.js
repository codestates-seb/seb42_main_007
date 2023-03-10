"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HouseboatDimensions = exports.Houseboat = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Houseboat = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 17.83c0-.42-.27-.8-.67-.94-.71-.27-1.12-.89-2.66-.89-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1s-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1-1.54 0-1.95.62-2.66.88-.4.15-.67.52-.67.95 0 .7.69 1.19 1.35.95.8-.29 1.18-.78 2-.78 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 .83 0 1.21.49 2 .78.66.24 1.35-.26 1.35-.95zm-3.09-8.02a.996.996 0 0 0-.22-1.4l-6.1-4.47a.99.99 0 0 0-1.18 0l-6.1 4.47c-.45.33-.54.95-.22 1.4.33.45.95.54 1.4.22L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-.66-.66a.996.996 0 1 0-1.41 1.41l.66.66c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l.66-.66a.996.996 0 1 0-1.41-1.41l-.66.66c-.18.18-.44.29-.7.29H17V9.65l.51.37c.45.33 1.07.23 1.4-.21zM13 13h-2v-2h2v2z"
  }));
});
exports.Houseboat = Houseboat;
Houseboat.displayName = 'Houseboat';
var HouseboatDimensions = {
  height: 24,
  width: 24
};
exports.HouseboatDimensions = HouseboatDimensions;