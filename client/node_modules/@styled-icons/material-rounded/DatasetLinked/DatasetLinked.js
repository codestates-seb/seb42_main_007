"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasetLinkedDimensions = exports.DatasetLinked = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DatasetLinked = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1zM13 7h4v4h-4V7zM7 7h4v4H7V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.03 17.66c.16-.98 1.09-1.66 2.08-1.66H15c.55 0 1-.45 1-1s-.45-1-1-1h-.83c-2.09 0-3.95 1.53-4.15 3.61A3.998 3.998 0 0 0 14 22h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-1.21 0-2.18-1.09-1.97-2.34zm7.8-3.66H19c-.55 0-1 .45-1 1s.45 1 1 1h.89c1 0 1.92.68 2.08 1.66.21 1.25-.76 2.34-1.97 2.34h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c2.34 0 4.21-2.01 3.98-4.39-.2-2.08-2.06-3.61-4.15-3.61z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 19h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1z"
  }));
});
exports.DatasetLinked = DatasetLinked;
DatasetLinked.displayName = 'DatasetLinked';
var DatasetLinkedDimensions = {
  height: 24,
  width: 24
};
exports.DatasetLinkedDimensions = DatasetLinkedDimensions;