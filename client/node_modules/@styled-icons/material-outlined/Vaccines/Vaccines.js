"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VaccinesDimensions = exports.Vaccines = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Vaccines = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 5.5H8V4h.5c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1H6v1.5H3c-.55 0-1 .45-1 1s.45 1 1 1V15c0 1.1.9 2 2 2h1v4l2 1.5V17h1c1.1 0 2-.9 2-2V7.5c.55 0 1-.45 1-1s-.45-1-1-1zM9 9H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V12H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V15H5V7.5h4V9zm10.5 1.5V10c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1v.5c0 .5-1.5 1.16-1.5 3V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6.5c0-1.84-1.5-2.5-1.5-3zm-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3zm2.5 5V17h-4v-1.5h4zM15 20v-1.5h4V20h-4z"
  }));
});
exports.Vaccines = Vaccines;
Vaccines.displayName = 'Vaccines';
var VaccinesDimensions = {
  height: 24,
  width: 24
};
exports.VaccinesDimensions = VaccinesDimensions;