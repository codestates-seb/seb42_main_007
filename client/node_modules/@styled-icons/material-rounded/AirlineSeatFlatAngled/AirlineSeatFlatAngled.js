"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirlineSeatFlatAngledDimensions = exports.AirlineSeatFlatAngled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirlineSeatFlatAngled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m22.25 14.29-.69 1.89L9.2 11.71l1.39-3.79a2.007 2.007 0 0 1 2.56-1.19l6.69 2.41a4 4 0 0 1 2.41 5.15zm-19.8-1.81 5.55 2V18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.63l3.58 1.29c.52.19 1.1-.08 1.29-.6.19-.52-.08-1.1-.6-1.29L3.13 10.59c-.52-.19-1.1.08-1.29.6-.18.52.09 1.1.61 1.29zM7.3 10.2a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4 2.99 2.99 0 0 0 4 1.4z"
  }));
});
exports.AirlineSeatFlatAngled = AirlineSeatFlatAngled;
AirlineSeatFlatAngled.displayName = 'AirlineSeatFlatAngled';
var AirlineSeatFlatAngledDimensions = {
  height: 24,
  width: 24
};
exports.AirlineSeatFlatAngledDimensions = AirlineSeatFlatAngledDimensions;