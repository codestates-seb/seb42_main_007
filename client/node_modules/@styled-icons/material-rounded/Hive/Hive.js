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
    d: "m14.09 7.51 1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.48-.86-.48h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.17.3.5.48.85.48h2.45c.36 0 .69-.18.87-.49zM9.91 9.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2a.99.99 0 0 0-.86-.49h-2.46a.99.99 0 0 0-.86.49zm7.1 2.02h2.45c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.19.31.51.49.86.49zm2.46 1h-2.46a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49zM7.84 11.03l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.5-.49-.85-.49H4.53c-.35 0-.68.19-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.45c.36-.01.68-.19.86-.49zm-.85 1.48H4.53a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.19-.3-.51-.49-.86-.49zm2.92 3.98-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.46a.99.99 0 0 0-.86.49z"
  }));
});
exports.Hive = Hive;
Hive.displayName = 'Hive';
var HiveDimensions = {
  height: 24,
  width: 24
};
exports.HiveDimensions = HiveDimensions;