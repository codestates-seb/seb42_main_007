"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirplanemodeInactiveDimensions = exports.AirplanemodeInactive = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirplanemodeInactive = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 14.6c0 .7-.67 1.2-1.34 1.01l-3.15-.93-7.01-7.01V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l7.98 4.7c.32.18.52.53.52.9zm-8.5-1.1L9.56 9.56 3.51 3.51A.996.996 0 1 0 2.1 4.92l5.67 5.67-5.25 3.11c-.32.18-.52.53-.52.9 0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09.42.11 1.9.48.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-2.67l5.57 5.57a.996.996 0 1 0 1.41-1.41L13.5 13.5z"
  }));
});
exports.AirplanemodeInactive = AirplanemodeInactive;
AirplanemodeInactive.displayName = 'AirplanemodeInactive';
var AirplanemodeInactiveDimensions = {
  height: 24,
  width: 24
};
exports.AirplanemodeInactiveDimensions = AirplanemodeInactiveDimensions;