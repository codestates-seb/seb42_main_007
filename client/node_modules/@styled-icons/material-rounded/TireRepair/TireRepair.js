"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TireRepairDimensions = exports.TireRepair = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TireRepair = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V12c0 .55.45 1 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-3a3.009 3.009 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-.55.45-1 1-1s1 .45 1 1v3c0 1.65 1.35 3 3 3s3-1.35 3-3v-5c.55 0 1-.45 1-1v-.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5-2-2V9.67l2 2v2.83zm0-5-2-2V4.67l2 2V9.5zm4 8-2 2v-2.83l2-2v2.83zm0-5-2 2v-2.83l2-2v2.83zm0-5-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
  }));
});
exports.TireRepair = TireRepair;
TireRepair.displayName = 'TireRepair';
var TireRepairDimensions = {
  height: 24,
  width: 24
};
exports.TireRepairDimensions = TireRepairDimensions;