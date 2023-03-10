"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SensorOccupiedDimensions = exports.SensorOccupied = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SensorOccupied = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37-.61.36-.97 1.02-.97 1.72V16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm10.11-4.21c.55-.23.78-.88.5-1.41a12.12 12.12 0 0 0-4.99-4.99 1.01 1.01 0 0 0-1.4.5c-.19.47-.01 1.02.43 1.25 1.79.94 3.26 2.42 4.21 4.21.23.45.78.63 1.25.44zM7.79 1.89c-.23-.55-.88-.78-1.4-.5A12.06 12.06 0 0 0 1.4 6.38c-.28.52-.05 1.18.5 1.41a.98.98 0 0 0 1.25-.43c.94-1.79 2.42-3.26 4.21-4.21.44-.24.62-.79.43-1.26zm-5.9 14.32c-.55.23-.78.88-.5 1.4 1.13 2.12 2.87 3.87 5 5 .52.28 1.17.04 1.4-.5.19-.47.01-1.02-.43-1.25-1.79-.94-3.26-2.42-4.21-4.21a1 1 0 0 0-1.26-.44zm14.32 5.9c.23.55.88.78 1.4.5 2.12-1.13 3.87-2.87 5-5 .28-.52.04-1.17-.5-1.4-.47-.19-1.02-.01-1.25.43-.94 1.79-2.42 3.26-4.21 4.21a1 1 0 0 0-.44 1.26z"
  }));
});
exports.SensorOccupied = SensorOccupied;
SensorOccupied.displayName = 'SensorOccupied';
var SensorOccupiedDimensions = {
  height: 24,
  width: 24
};
exports.SensorOccupiedDimensions = SensorOccupiedDimensions;