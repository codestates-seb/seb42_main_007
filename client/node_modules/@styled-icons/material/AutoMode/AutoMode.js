"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoModeDimensions = exports.AutoMode = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AutoMode = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92l1.42-1.42zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.928 8.928 0 0 1 11 3.06zM4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61zM20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.928 8.928 0 0 1 20.94 11zM7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21z"
  }));
});
exports.AutoMode = AutoMode;
AutoMode.displayName = 'AutoMode';
var AutoModeDimensions = {
  height: 24,
  width: 24
};
exports.AutoModeDimensions = AutoModeDimensions;