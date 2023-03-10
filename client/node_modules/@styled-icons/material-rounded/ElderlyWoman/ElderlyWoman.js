"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElderlyWomanDimensions = exports.ElderlyWoman = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ElderlyWoman = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.52 11c-1.57 0-2.94-.9-3.6-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5L7 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2L11 19h2v3c0 .55.45 1 1 1s1-.45 1-1v-2.71c0-.22-.04-.43-.1-.64L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81V13c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.79-.62-1.5-1.48-1.5zM11.6 2.91c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91z"
  }));
});
exports.ElderlyWoman = ElderlyWoman;
ElderlyWoman.displayName = 'ElderlyWoman';
var ElderlyWomanDimensions = {
  height: 24,
  width: 24
};
exports.ElderlyWomanDimensions = ElderlyWomanDimensions;