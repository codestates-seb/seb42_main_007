"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThunderstormDimensions = exports.Thunderstorm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Thunderstorm = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zm-1.97 13.09-.84-.42.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42-.9 1.03c-.36.42-.32 1.05.09 1.41.19.17.42.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7zm-6 0-.85-.43.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42L7 22.34c-.36.42-.32 1.05.09 1.41.19.17.43.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7z"
  }));
});
exports.Thunderstorm = Thunderstorm;
Thunderstorm.displayName = 'Thunderstorm';
var ThunderstormDimensions = {
  height: 24,
  width: 24
};
exports.ThunderstormDimensions = ThunderstormDimensions;