"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextRotationAngleupDimensions = exports.TextRotationAngleup = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TextRotationAngleup = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m17.61 9.85.56.56-8.48 8.49a.996.996 0 1 0 1.41 1.41l8.49-8.49.56.56c.31.32.85.1.85-.34V9.5c0-.28-.22-.5-.5-.5h-2.54a.5.5 0 0 0-.35.85zm-9.13 2.9 3.54-3.54 1.6.67c.36.15.77.07 1.05-.21a.958.958 0 0 0-.32-1.57L5.26 4.5c-.43-.16-.91-.06-1.23.26-.32.32-.42.8-.25 1.23l3.61 9.09c.25.64 1.08.81 1.57.32.28-.28.36-.69.21-1.05l-.69-1.6zm-.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z"
  }));
});
exports.TextRotationAngleup = TextRotationAngleup;
TextRotationAngleup.displayName = 'TextRotationAngleup';
var TextRotationAngleupDimensions = {
  height: 24,
  width: 24
};
exports.TextRotationAngleupDimensions = TextRotationAngleupDimensions;