"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConstructionDimensions = exports.Construction = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Construction = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m20.99 17.99-4.94-4.94-2.12 2.12 4.94 4.94c.59.59 1.54.59 2.12 0 .58-.59.58-1.54 0-2.12zM17.65 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41-1.93 0-3.5 1.57-3.5 3.5 0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78a.996.996 0 0 0 0-1.41l-.71-.71 2.12-2.12a3 3 0 0 0-4.24 0L5.08 6.32a.996.996 0 0 0 0 1.41l.71.71H3.25c-.19 0-.37.07-.5.21a.7.7 0 0 0 0 1l2.54 2.54a.7.7 0 0 0 1 0c.13-.13.21-.31.21-.5V9.15l.7.7c.39.39 1.02.39 1.41 0l1.78 1.78-6.35 6.35a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0L16.48 9.79c.37.13.76.21 1.17.21z"
  }));
});
exports.Construction = Construction;
Construction.displayName = 'Construction';
var ConstructionDimensions = {
  height: 24,
  width: 24
};
exports.ConstructionDimensions = ConstructionDimensions;