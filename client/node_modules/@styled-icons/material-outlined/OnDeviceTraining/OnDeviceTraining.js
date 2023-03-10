"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnDeviceTrainingDimensions = exports.OnDeviceTraining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var OnDeviceTraining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 1.01 6 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM18 21H6v-1h12v1zm0-3H6V6h12v12zm0-14H6V3h12v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.01 15.95c.62-.83.99-1.84.99-2.95s-.37-2.12-.99-2.95l-1.07 1.07c.35.54.56 1.19.56 1.88s-.21 1.34-.56 1.88l1.07 1.07zm-6.95-1.07c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5v1.25l2.25-2-2.25-2V8c-2.76 0-5 2.24-5 5 0 1.11.37 2.12.99 2.95l1.07-1.07z"
  }));
});
exports.OnDeviceTraining = OnDeviceTraining;
OnDeviceTraining.displayName = 'OnDeviceTraining';
var OnDeviceTrainingDimensions = {
  height: 24,
  width: 24
};
exports.OnDeviceTrainingDimensions = OnDeviceTrainingDimensions;