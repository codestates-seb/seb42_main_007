"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridOffDimensions = exports.GridOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var GridOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2H8zm8 0h3c.55 0 1 .45 1 1v3h-4V4zm6.16 17.88L2.12 1.84A.996.996 0 1 0 .71 3.25L2 4.55V20c0 1.1.9 2 2 2h15.45l1.3 1.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H5c-.55 0-1-.45-1-1v-3h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.55V20zm2 0v-1.45L17.45 20H16z"
  }));
});
exports.GridOff = GridOff;
GridOff.displayName = 'GridOff';
var GridOffDimensions = {
  height: 24,
  width: 24
};
exports.GridOffDimensions = GridOffDimensions;