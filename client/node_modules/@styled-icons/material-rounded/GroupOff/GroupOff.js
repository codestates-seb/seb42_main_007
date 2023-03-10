"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupOffDimensions = exports.GroupOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var GroupOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23zM7.24 4.41a3.996 3.996 0 0 1 5.35 5.35L7.24 4.41zm13.95 16.78a.996.996 0 1 1-1.41 1.41l-2.99-2.99A1 1 0 0 1 16 20H2c-.55 0-1-.45-1-1v-2c0-2.66 5.33-4 8-4 .37 0 .8.03 1.25.08L9.17 12H9c-2.21 0-4-1.79-4-4v-.17L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.39 18.38zm-2.3-5.12c-.29-1.22-1.13-2.19-2.23-2.94 2.76.4 6.34 1.69 6.34 3.87v2c0 .32-.15.6-.38.79l-3.73-3.72z"
  }));
});
exports.GroupOff = GroupOff;
GroupOff.displayName = 'GroupOff';
var GroupOffDimensions = {
  height: 24,
  width: 24
};
exports.GroupOffDimensions = GroupOffDimensions;