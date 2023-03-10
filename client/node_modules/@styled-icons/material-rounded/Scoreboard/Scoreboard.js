"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreboardDimensions = exports.Scoreboard = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Scoreboard = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17.5 13.5H16v-3h1.5v3zM16 2c-.55 0-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1zM9.5 14.25c0 .41-.34.75-.75.75H6c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1H5.75c-.41 0-.75-.34-.75-.75S5.34 9 5.75 9H8.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h2.25c.41 0 .75.34.75.75zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v4zm-6.25-7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75S11.59 6 12 6s.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75zm0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z"
  }));
});
exports.Scoreboard = Scoreboard;
Scoreboard.displayName = 'Scoreboard';
var ScoreboardDimensions = {
  height: 24,
  width: 24
};
exports.ScoreboardDimensions = ScoreboardDimensions;