"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectingAirportsDimensions = exports.ConnectingAirports = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ConnectingAirports = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15.93 10.6c.39 0 .66.37.55.74L15.4 15h2.85l.59-.78c.1-.14.26-.22.43-.22.36 0 .62.35.52.7L19.4 16l.39 1.3c.1.35-.16.7-.52.7-.17 0-.33-.08-.43-.22l-.59-.78H15.4l1.08 3.66c.11.37-.17.74-.55.74-.2 0-.39-.11-.5-.28L13 17h-2.97c-.53 0-1-.4-1.03-.93-.04-.59.43-1.07 1-1.07h3l2.43-4.12c.11-.17.3-.28.5-.28zm-7.86-8c-.39 0-.66.37-.55.74L8.6 7H5.75l-.59-.78A.526.526 0 0 0 4.73 6c-.36 0-.62.35-.52.7L4.6 8l-.39 1.3c-.1.35.16.7.52.7.17 0 .33-.08.43-.22L5.75 9H8.6l-1.08 3.66c-.11.37.17.74.55.74.2 0 .39-.11.5-.28L11 9h2.97c.53 0 1-.4 1.03-.93.04-.59-.43-1.07-1-1.07h-3L8.57 2.88a.605.605 0 0 0-.5-.28z"
  }));
});
exports.ConnectingAirports = ConnectingAirports;
ConnectingAirports.displayName = 'ConnectingAirports';
var ConnectingAirportsDimensions = {
  height: 24,
  width: 24
};
exports.ConnectingAirportsDimensions = ConnectingAirportsDimensions;