"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpreterModeDimensions = exports.InterpreterMode = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var InterpreterMode = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.5 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5zM20 20h1v-1.54c1.69-.24 3-1.7 3-3.46h-1a2.5 2.5 0 0 1-5 0h-1c0 1.76 1.31 3.22 3 3.46V20zM9 12c-2.21 0-4-1.79-4-4a3.999 3.999 0 0 1 5.34-3.77A5.938 5.938 0 0 0 9 8c0 1.43.5 2.74 1.34 3.77-.42.15-.87.23-1.34.23zm-1.89 1.13A4.965 4.965 0 0 0 5 17.22V20H1v-2.78c0-1.12.61-2.15 1.61-2.66 1.24-.64 2.76-1.19 4.5-1.43zM11 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm2 7c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h7.17c.5.86 1.25 1.56 2.15 2H7v-2.78c0-1.12.61-2.15 1.61-2.66C10.29 13.7 12.47 13 15 13c.39 0 .77.02 1.14.05-.33.59-.55 1.26-.62 1.96-.17-.01-.34-.01-.52-.01z"
  }));
});
exports.InterpreterMode = InterpreterMode;
InterpreterMode.displayName = 'InterpreterMode';
var InterpreterModeDimensions = {
  height: 24,
  width: 24
};
exports.InterpreterModeDimensions = InterpreterModeDimensions;