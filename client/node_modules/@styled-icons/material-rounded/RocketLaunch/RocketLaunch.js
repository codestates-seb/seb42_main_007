"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RocketLaunchDimensions = exports.RocketLaunch = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RocketLaunch = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2 1.16-.54 3.65-1.81 5.26-3.42 4.59-4.59 4.63-8.33 4.36-9.93a.979.979 0 0 0-.79-.79c-1.6-.27-5.34-.23-9.93 4.36-1.61 1.61-2.87 4.1-3.42 5.26-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6a3 3 0 0 1-.82 2.71c-.77.77-3.16 1.34-4.71 1.64-.69.13-1.3-.48-1.17-1.17.3-1.55.86-3.94 1.64-4.71a3 3 0 0 1 2.71-.82c1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
  }));
});
exports.RocketLaunch = RocketLaunch;
RocketLaunch.displayName = 'RocketLaunch';
var RocketLaunchDimensions = {
  height: 24,
  width: 24
};
exports.RocketLaunchDimensions = RocketLaunchDimensions;