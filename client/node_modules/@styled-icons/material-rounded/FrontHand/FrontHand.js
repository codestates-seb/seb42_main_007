"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrontHandDimensions = exports.FrontHand = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FrontHand = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.5 14.5c0 .28-.22.5-.5.5-1.51 0-2.77 1.12-2.97 2.58-.03.24-.25.42-.49.42-.3 0-.54-.27-.5-.57a4.03 4.03 0 0 1 3.46-3.4V3.25a1.25 1.25 0 0 0-2.5 0v7.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V1.25a1.25 1.25 0 0 0-2.5 0v9.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V2.75a1.25 1.25 0 0 0-2.5 0v8.75c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5a1.25 1.25 0 0 0-2.5 0v5.25z"
  }));
});
exports.FrontHand = FrontHand;
FrontHand.displayName = 'FrontHand';
var FrontHandDimensions = {
  height: 24,
  width: 24
};
exports.FrontHandDimensions = FrontHandDimensions;