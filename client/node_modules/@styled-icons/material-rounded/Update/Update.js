"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDimensions = exports.Update = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Update = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 8.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.1-.82-.26-1.03l-2.87-1.71v-3.4c-.01-.4-.35-.74-.76-.74s-.75.34-.75.75zm10 .75V4.21c0-.45-.54-.67-.85-.35l-1.78 1.78a9.01 9.01 0 0 0-7.21-2.6c-4.19.38-7.64 3.75-8.1 7.94a9 9 0 0 0 17.87 2.14c.07-.6-.4-1.12-1-1.12-.5 0-.92.37-.98.86-.43 3.49-3.44 6.19-7.05 6.14-3.71-.05-6.84-3.18-6.9-6.9C4.94 8.2 8.11 5 12 5c1.93 0 3.68.79 4.95 2.05l-2.09 2.09c-.32.32-.1.86.35.86h5.29c.28 0 .5-.22.5-.5z"
  }));
});
exports.Update = Update;
Update.displayName = 'Update';
var UpdateDimensions = {
  height: 24,
  width: 24
};
exports.UpdateDimensions = UpdateDimensions;