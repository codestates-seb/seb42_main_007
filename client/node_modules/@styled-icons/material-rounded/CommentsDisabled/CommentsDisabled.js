"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsDisabledDimensions = exports.CommentsDisabled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CommentsDisabled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V16c0 1.1.9 2 2 2h11.17l4.61 4.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0zm4.99 6.4L8.17 11H7a1.003 1.003 0 0 1-.62-1.79zM7 14c-.55 0-1-.45-1-1s.45-1 1-1h2.17l2 2H7zm7.83-2-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1h-5.17l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14H17c.55 0 1-.45 1-1s-.45-1-1-1h-2.17z"
  }));
});
exports.CommentsDisabled = CommentsDisabled;
CommentsDisabled.displayName = 'CommentsDisabled';
var CommentsDisabledDimensions = {
  height: 24,
  width: 24
};
exports.CommentsDisabledDimensions = CommentsDisabledDimensions;