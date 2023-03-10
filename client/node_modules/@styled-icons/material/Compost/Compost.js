"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompostDimensions = exports.Compost = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Compost = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12.87 11.81A2.5 2.5 0 0 1 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77A6.505 6.505 0 0 0 18.5 12h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81z"
  }));
});
exports.Compost = Compost;
Compost.displayName = 'Compost';
var CompostDimensions = {
  height: 24,
  width: 24
};
exports.CompostDimensions = CompostDimensions;