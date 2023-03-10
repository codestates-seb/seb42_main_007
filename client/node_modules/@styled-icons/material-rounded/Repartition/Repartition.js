"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepartitionDimensions = exports.Repartition = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Repartition = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.5 21h15c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5zm5.83-2v-2h3.33v2h-3.33zM19 19h-3.33v-2H19v2zM5 17h3.33v2H5v-2zm1.71-7.71c.39-.39.39-1.02 0-1.42L5.83 7h11.06c1 0 1.92.68 2.08 1.66C19.18 9.91 18.21 11 17 11H4c-.55 0-1 .45-1 1s.45 1 1 1h12.82c2.09 0 3.96-1.52 4.16-3.6C21.21 7.02 19.34 5 17 5H5.83l.88-.88c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0L2.71 5.29a.996.996 0 0 0 0 1.41L5.3 9.29c.38.39 1.02.39 1.41 0z"
  }));
});
exports.Repartition = Repartition;
Repartition.displayName = 'Repartition';
var RepartitionDimensions = {
  height: 24,
  width: 24
};
exports.RepartitionDimensions = RepartitionDimensions;