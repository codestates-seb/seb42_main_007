"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddHomeWorkDimensions = exports.AddHomeWork = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AddHomeWork = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14.96 11.7a1.98 1.98 0 0 0-.8-1.3l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V19c0 1.1.9 2 2 2h3v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3a6.99 6.99 0 0 1 3.96-6.3zM23 13.11V4.97C23 3.88 22.12 3 21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.02.05c.1.06.21.11.3.18l5 3.57c.79.56 1.34 1.4 1.56 2.32.37-.05.74-.09 1.12-.09 1.96 0 3.73.81 5 2.11zM17 7h2v2h-2V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 18c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5.5 3v-2.5H15v-1h2.5V15h1v2.5H21v1h-2.5V21h-1z"
  }));
});
exports.AddHomeWork = AddHomeWork;
AddHomeWork.displayName = 'AddHomeWork';
var AddHomeWorkDimensions = {
  height: 24,
  width: 24
};
exports.AddHomeWorkDimensions = AddHomeWorkDimensions;