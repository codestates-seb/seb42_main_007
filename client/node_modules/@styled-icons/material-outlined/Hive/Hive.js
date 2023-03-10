"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HiveDimensions = exports.Hive = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Hive = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m21.5 9-2.25-4h-3.31l-1.69-3h-4.5L8.06 5H4.75L2.5 9l1.69 3-1.69 3 2.25 4h3.31l1.69 3h4.5l1.69-3h3.31l2.25-4-1.69-3 1.69-3zm-2.29 0-1.12 2h-2.14l-1.12-2 1.12-2h2.14l1.12 2zm-8.27 5-1.12-2 1.12-2h2.12l1.12 2-1.12 2h-2.12zm2.14-10 1.12 1.98L13.06 8h-2.12L9.8 5.98 10.92 4h2.16zM5.92 7h2.14l1.12 2-1.12 2H5.92L4.79 9l1.13-2zm-1.13 8 1.12-2h2.14l1.12 2-1.12 2H5.92l-1.13-2zm6.13 5L9.8 18.02 10.94 16h2.12l1.13 2.02L13.08 20h-2.16zm7.16-3h-2.14l-1.12-2 1.12-2h2.14l1.12 2-1.12 2z"
  }));
});
exports.Hive = Hive;
Hive.displayName = 'Hive';
var HiveDimensions = {
  height: 24,
  width: 24
};
exports.HiveDimensions = HiveDimensions;