"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RocketDimensions = exports.Rocket = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Rocket = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11.41 2.87a.99.99 0 0 1 1.18 0c1.22.88 3.91 3.59 3.91 10.13 0 2.16-.78 4.76-1.36 6.35-.14.39-.51.65-.93.65H9.8c-.42 0-.8-.26-.94-.65C8.28 17.76 7.5 15.16 7.5 13c0-6.54 2.69-9.25 3.91-10.13zM14 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87l-1.13.75c-.56.38-.89 1-.89 1.67v4.45c0 .71.71 1.19 1.37.93l2.32-.93zm12.31 0v-4.45c0-.67-.33-1.29-.89-1.66l-1.13-.75c-.15 2.69-1.2 5.64-1.67 6.87l2.32.93c.66.25 1.37-.23 1.37-.94z"
  }));
});
exports.Rocket = Rocket;
Rocket.displayName = 'Rocket';
var RocketDimensions = {
  height: 24,
  width: 24
};
exports.RocketDimensions = RocketDimensions;