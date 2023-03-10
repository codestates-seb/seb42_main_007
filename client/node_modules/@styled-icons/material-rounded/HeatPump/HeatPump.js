"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeatPumpDimensions = exports.HeatPump = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HeatPump = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7 2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z"
  }));
});
exports.HeatPump = HeatPump;
HeatPump.displayName = 'HeatPump';
var HeatPumpDimensions = {
  height: 24,
  width: 24
};
exports.HeatPumpDimensions = HeatPumpDimensions;