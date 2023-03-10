"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransgenderDimensions = exports.Transgender = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Transgender = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 8c1.93 0 3.5 1.57 3.5 3.5S13.93 15 12 15s-3.5-1.57-3.5-3.5S10.07 8 12 8zm4.53.38 3.97-3.96V7h2V1h-6v2h2.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65 1.41-1.41-1.41-1.42L6.82 4.9 4.92 3H7.5V1h-6v6h2V4.42l1.91 1.9-1.42 1.42L5.4 9.15l1.41-1.41.65.65c-.6.88-.96 1.95-.96 3.11a5.5 5.5 0 0 0 4.5 5.41V19H9v2h2v2h2v-2h2v-2h-2v-2.09a5.5 5.5 0 0 0 3.53-8.53z"
  }));
});
exports.Transgender = Transgender;
Transgender.displayName = 'Transgender';
var TransgenderDimensions = {
  height: 24,
  width: 24
};
exports.TransgenderDimensions = TransgenderDimensions;