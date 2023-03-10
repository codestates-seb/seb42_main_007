"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChaletDimensions = exports.Chalet = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Chalet = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22v-1z"
  }));
});
exports.Chalet = Chalet;
Chalet.displayName = 'Chalet';
var ChaletDimensions = {
  height: 24,
  width: 24
};
exports.ChaletDimensions = ChaletDimensions;