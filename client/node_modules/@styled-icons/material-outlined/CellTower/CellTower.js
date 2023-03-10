"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellTowerDimensions = exports.CellTower = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CellTower = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7zM19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9 0 2.1-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1 0-2.6-1-5.1-2.9-7.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10c0 2.6 1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9 0-2.1.8-4.3 2.4-5.9zm10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5l1.2 1.2zM14.5 10a2.5 2.5 0 0 0-5 0c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88zm-4.17 8L12 13l1.67 5h-3.34z"
  }));
});
exports.CellTower = CellTower;
CellTower.displayName = 'CellTower';
var CellTowerDimensions = {
  height: 24,
  width: 24
};
exports.CellTowerDimensions = CellTowerDimensions;