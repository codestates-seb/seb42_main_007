"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsunamiDimensions = exports.Tsunami = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Tsunami = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.67 17.63c-3.8 2.8-6.12.4-6.67 0-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37zm.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2.01 14.5l-.01 2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37-3.8 2.8-6.12.4-6.67 0-.9.67-.54.41-.91.63-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12z"
  }));
});
exports.Tsunami = Tsunami;
Tsunami.displayName = 'Tsunami';
var TsunamiDimensions = {
  height: 24,
  width: 24
};
exports.TsunamiDimensions = TsunamiDimensions;