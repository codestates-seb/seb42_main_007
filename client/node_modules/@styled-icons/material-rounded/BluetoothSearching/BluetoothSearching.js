"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BluetoothSearchingDimensions = exports.BluetoothSearching = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BluetoothSearching = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m15.98 10.28-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48.5.5 0 0 0-.84-.24zm4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a9.995 9.995 0 0 0-.91-4.11zM11.41 12 15 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L5.11 5.7A.996.996 0 1 0 3.7 7.11L8.59 12 3.7 16.89a.996.996 0 1 0 1.41 1.41L9 14.41v6.18c0 .89 1.08 1.34 1.71.71L15 17c.39-.39.39-1.02 0-1.42L11.41 12zM11 5.83l1.88 1.88L11 9.59V5.83zm0 12.34v-3.76l1.88 1.88L11 18.17z"
  }));
});
exports.BluetoothSearching = BluetoothSearching;
BluetoothSearching.displayName = 'BluetoothSearching';
var BluetoothSearchingDimensions = {
  height: 24,
  width: 24
};
exports.BluetoothSearchingDimensions = BluetoothSearchingDimensions;