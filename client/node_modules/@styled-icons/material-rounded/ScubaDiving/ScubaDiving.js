"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScubaDivingDimensions = exports.ScubaDiving = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScubaDiving = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 3.56-.95c.53-.14.85-.69.71-1.22l-.26-.97c-.14-.53-.69-.85-1.22-.71l-3.57.95c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zm13.63-7.59a.73.73 0 0 0-1.04 0L19 5l-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 3 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2L7 19l1.14-3.14 5.57-1.77c.19-.06.38-.15.54-.27l4.2-2.94c.36-.25.62-.61.75-1.02l1.3-3.96 2.06-2.38c.25-.3.23-.73-.04-1z"
  }));
});
exports.ScubaDiving = ScubaDiving;
ScubaDiving.displayName = 'ScubaDiving';
var ScubaDivingDimensions = {
  height: 24,
  width: 24
};
exports.ScubaDivingDimensions = ScubaDivingDimensions;