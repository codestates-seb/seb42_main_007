"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirplanemodeActiveDimensions = exports.AirplanemodeActive = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirplanemodeActive = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.48 13.7 13.5 9V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9l-7.98 4.7c-.32.18-.52.53-.52.9 0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09.42.11 1.9.48.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-5.5l7.16 2.1c.67.2 1.34-.3 1.34-1 0-.37-.2-.72-.52-.9z"
  }));
});
exports.AirplanemodeActive = AirplanemodeActive;
AirplanemodeActive.displayName = 'AirplanemodeActive';
var AirplanemodeActiveDimensions = {
  height: 24,
  width: 24
};
exports.AirplanemodeActiveDimensions = AirplanemodeActiveDimensions;