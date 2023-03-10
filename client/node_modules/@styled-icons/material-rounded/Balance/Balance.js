"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BalanceDimensions = exports.Balance = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Balance = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M13 19V7.83c.85-.3 1.53-.98 1.83-1.83H18l-2.78 6.49c-.17.39-.23.84-.11 1.25.39 1.3 1.76 2.26 3.39 2.26s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L19 6h1c.55 0 1-.45 1-1s-.45-1-1-1h-5.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1l-2.78 6.49c-.17.39-.23.84-.11 1.25C2.49 15.04 3.87 16 5.5 16s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L6 6h3.17c.3.85.98 1.53 1.83 1.83V19m0 0H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-8m7.37-6h-3.74l1.87-4.36L20.37 13zm-13 0H3.63L5.5 8.64 7.37 13zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }));
});
exports.Balance = Balance;
Balance.displayName = 'Balance';
var BalanceDimensions = {
  height: 24,
  width: 24
};
exports.BalanceDimensions = BalanceDimensions;