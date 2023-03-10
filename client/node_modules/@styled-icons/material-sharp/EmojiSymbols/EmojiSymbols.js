"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiSymbolsDimensions = exports.EmojiSymbols = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EmojiSymbols = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.404 9.182 7.778-7.778 1.414 1.414-7.778 7.778z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14.5,
    cy: 14.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 19.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11A2.5 2.5 0 0 0 18 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5zm-5.76 4.96-1.41 1.41-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06 1.41 1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.501.501 0 0 1 0-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 0 1 0-.71l1.06-1.06.71.71-1.07 1.06z"
  }));
});
exports.EmojiSymbols = EmojiSymbols;
EmojiSymbols.displayName = 'EmojiSymbols';
var EmojiSymbolsDimensions = {
  height: 24,
  width: 24
};
exports.EmojiSymbolsDimensions = EmojiSymbolsDimensions;