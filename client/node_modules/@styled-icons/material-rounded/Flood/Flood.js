"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloodDimensions = exports.Flood = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Flood = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.67 19c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.54 0-1.96.62-2.67.88-.4.15-.67.52-.67.95 0 .71.72 1.19 1.38.94.77-.29 1.11-.77 1.96-.77 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.22 0 1.4 1 3.33 1 1.93 0 2.1-1 3.33-1 .84 0 1.18.47 1.95.77.66.26 1.38-.23 1.38-.94v-.01c0-.42-.27-.8-.67-.94-.71-.26-1.12-.88-2.66-.88zm-9.99-1.5c1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 .82 0 1.17.46 1.93.76.66.26 1.38-.23 1.38-.94 0-.42-.26-.79-.65-.94-.29-.11-.54-.27-.83-.43l-2.02-7.53 1.17.47a.983.983 0 0 0 1.29-.55.981.981 0 0 0-.57-1.29l-9.24-3.54c-.81-.31-1.72-.06-2.27.61l-6.23 7.7a.982.982 0 0 0 .16 1.4c.43.34 1.06.26 1.39-.17l.78-1 .93 3.48c-.18-.02-.35-.05-.56-.05-1.54 0-1.95.62-2.66.88-.4.17-.67.55-.67.97 0 .7.69 1.19 1.35.95.8-.29 1.18-.78 2-.78 1.19 0 1.42 1 3.33 1zm5.36-7.32 1.42 5.31c-1.34.09-1.47-.99-3.47-.99-.36 0-.65.04-.91.1l-.91-3.39 3.87-1.03z"
  }));
});
exports.Flood = Flood;
Flood.displayName = 'Flood';
var FloodDimensions = {
  height: 24,
  width: 24
};
exports.FloodDimensions = FloodDimensions;